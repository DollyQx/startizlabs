import { NextRequest, NextResponse } from "next/server";
import { 
  GoogleGenerativeAI, 
  GoogleGenerativeAIError, 
  GoogleGenerativeAIFetchError, 
  GoogleGenerativeAIResponseError 
} from "@google/generative-ai";
import { PlannerAnswersSchema, LaunchBlueprintSchema, GeminiResponseSchema } from "./schema";
import { systemPrompt } from "./systemPrompt";

// Helper function to strip sensitive API keys from log messages
function sanitizeMessage(message: string): string {
  if (!message) return "";
  let sanitized = message.replace(/AIzaSy[a-zA-Z0-9_-]{33}/g, "[REDACTED_API_KEY]");
  sanitized = sanitized.replace(/key=[a-zA-Z0-9_-]+/g, "key=[REDACTED_API_KEY]");
  return sanitized;
}

// Structured error responding with server-side diagnostic logging (safe)
function handleApiError(
  category: string,
  friendlyMessage: string,
  status: number,
  rawError?: unknown,
  extraDetails?: Record<string, unknown>
) {
  const rawMessage = rawError instanceof Error ? rawError.message : String(rawError || "");
  const errorMessage = sanitizeMessage(rawMessage);

  // Safe server-side diagnostic logging (Vercel logs)
  console.error(
    `[AI_PLANNER_DIAGNOSTIC] FAIL_CATEGORY: ${category} | Status: ${status} | Error: ${errorMessage}`,
    extraDetails ? `| Details: ${JSON.stringify(extraDetails)}` : ""
  );

  const responseBody: { error: string; debugInfo?: Record<string, unknown> } = {
    error: friendlyMessage,
  };

  // Development-only diagnostic mode to assist locally
  if (process.env.NODE_ENV === "development") {
    responseBody.debugInfo = {
      category,
      message: errorMessage,
      ...extraDetails,
    };
  }

  return NextResponse.json(responseBody, { status });
}

export async function POST(req: NextRequest) {
  // 1. Request Protection: Reject empty request body or oversized requests (limit ~50KB)
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 50000) {
    return handleApiError(
      "PAYLOAD_TOO_LARGE",
      "Payload exceeds safe limit. Please shorten your descriptions.",
      413
    );
  }

  let body;
  try {
    body = await req.json();
  } catch (parseErr) {
    return handleApiError(
      "MALFORMED_REQUEST_JSON",
      "Invalid JSON payload structure.",
      400,
      parseErr
    );
  }

  // 2. Validate incoming PlannerAnswers using Zod
  const validationInput = PlannerAnswersSchema.safeParse(body);
  if (!validationInput.success) {
    return handleApiError(
      "INPUT_VALIDATION_FAILURE",
      "Invalid parameters. Please review your answers.",
      400,
      validationInput.error.format()
    );
  }

  const plannerAnswers = validationInput.data;

  // 3. Security: Check for API Key configuration
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return handleApiError(
      "MISSING_API_KEY",
      "Planner generation failed. System configuration is missing.",
      500
    );
  }

  // 4. Model Lookup: Configurable model name with fallback
  const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";

  try {
    // 5. Query the Gemini API using official Google Generative AI SDK
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: modelName,
      systemInstruction: systemPrompt,
    });

    const promptText = `Generate a LaunchBlueprint JSON block for these answers:
    ${JSON.stringify(plannerAnswers, null, 2)}`;

    // Create a 20-second timeout promise
    let timeoutId: NodeJS.Timeout | undefined;
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutId = setTimeout(() => reject(new Error("Gemini request timed out")), 20000);
    });

    // Call the Gemini model with responseSchema structured output
    const geminiCallPromise = model.generateContent({
      contents: [{ role: "user", parts: [{ text: promptText }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: GeminiResponseSchema,
      },
    });

    // Race to prevent infinite hanging
    let apiResult;
    try {
      apiResult = await Promise.race([geminiCallPromise, timeoutPromise]);
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }

    const responseText = apiResult.response.text();

    if (!responseText) {
      return handleApiError(
        "EMPTY_RESPONSE",
        "Deep strategizing failed. The AI returned an empty response.",
        502,
        null,
        { model: modelName }
      );
    }

    // 6. Parse and Validate AI Response using Zod before returning to client
    let parsedBlueprint;
    try {
      parsedBlueprint = JSON.parse(responseText);
    } catch (parseError) {
      return handleApiError(
        "MALFORMED_RESPONSE",
        "Failed to compile strategies. Please submit again.",
        502,
        parseError,
        { model: modelName, responseSnippet: responseText.substring(0, 500) }
      );
    }

    const validationOutput = LaunchBlueprintSchema.safeParse(parsedBlueprint);
    if (!validationOutput.success) {
      return handleApiError(
        "RESPONSE_VALIDATION_FAILURE",
        "Blueprint generation did not pass validation formatting. Please try again.",
        502,
        validationOutput.error.format(),
        { model: modelName }
      );
    }

    // 7. Success: Return verified structured blueprint to client
    return NextResponse.json(validationOutput.data);

  } catch (err: unknown) {
    // 8. Distinguish specific error categories safely
    if (err instanceof Error && err.message === "Gemini request timed out") {
      return handleApiError(
        "TIMEOUT",
        "AI planner request timed out. Please try again.",
        504,
        err,
        { model: modelName }
      );
    }

    if (err instanceof GoogleGenerativeAIFetchError) {
      const status = err.status || 502;
      let category = "GEMINI_API_FAILURE";
      let friendlyMsg = "AI planning service was temporarily unavailable. Please retry shortly.";

      if (status === 401 || status === 403) {
        category = "INVALID_API_KEY";
        friendlyMsg = "Planner generation failed due to configuration credential issues.";
      } else if (status === 404) {
        category = "MODEL_NOT_FOUND";
        friendlyMsg = "Selected planning model was not found in service.";
      } else if (status === 429) {
        category = "QUOTA_LIMIT_EXCEEDED";
        friendlyMsg = "Planner rate limit exceeded. Please wait a moment and try again.";
      }

      return handleApiError(category, friendlyMsg, status, err, { 
        model: modelName, 
        statusText: err.statusText,
        errorDetails: err.errorDetails 
      });
    }

    if (err instanceof GoogleGenerativeAIResponseError) {
      return handleApiError(
        "SAFETY_BLOCKED",
        "The AI planner generated a response, but it was blocked for safety/content reasons.",
        502,
        err,
        { model: modelName }
      );
    }

    if (err instanceof GoogleGenerativeAIError) {
      return handleApiError(
        "GEMINI_SDK_ERROR",
        "AI planning service reported an error. Please try again.",
        502,
        err,
        { model: modelName }
      );
    }

    // Fallback for completely unexpected runtime errors
    return handleApiError(
      "UNEXPECTED_SERVER_ERROR",
      "An unexpected error occurred while planning. Please try again.",
      500,
      err,
      { model: modelName }
    );
  }
}
