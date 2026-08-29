import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PlannerAnswersSchema, LaunchBlueprintSchema } from "./schema";
import { systemPrompt } from "./systemPrompt";

export async function POST(req: NextRequest) {
  try {
    // 1. Request Protection: Reject empty request body or oversized requests (limit ~50KB)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 50000) {
      return NextResponse.json(
        { error: "Payload exceeds safe limit. Please shorten your descriptions." },
        { status: 413 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload structure." },
        { status: 400 }
      );
    }

        // 2. Validate incoming PlannerAnswers using Zod
    const validationInput = PlannerAnswersSchema.safeParse(body);
    if (!validationInput.success) {
      console.warn("Input validation failed:", validationInput.error.format());
      return NextResponse.json(
        { error: "Invalid parameters. Please review your answers." },
        { status: 400 }
      );
    }

    const plannerAnswers = validationInput.data;

    // 3. Security: Check for API Key configuration
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Missing server configuration: GEMINI_API_KEY environment variable is not defined.");
      return NextResponse.json(
        { error: "Planner generation failed. System configuration is missing." },
        { status: 500 }
      );
    }

        // 4. Model Lookup: Configurable model name with fallback
    const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";

    // 5. Query the Gemini API using official Google Generative AI SDK
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: modelName,
      systemInstruction: systemPrompt,
    });

    const promptText = `Generate a LaunchBlueprint JSON block for these answers:
    ${JSON.stringify(plannerAnswers, null, 2)}`;

    // Create a 20-second timeout promise
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Gemini request timed out")), 20000)
    );

    // Call the Gemini model
    const geminiCallPromise = model.generateContent({
      contents: [{ role: "user", parts: [{ text: promptText }] }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    // Race to prevent infinite hanging
    const apiResult = await Promise.race([geminiCallPromise, timeoutPromise]);
    const responseText = apiResult.response.text();

    if (!responseText) {
      console.error("Gemini returned an empty response body.");
      return NextResponse.json(
        { error: "Deep strategizing failed. The AI returned an empty response." },
        { status: 502 }
      );
    }

    // 6. Parse and Validate AI Response using Zod before returning to client
    let parsedBlueprint;
    try {
      parsedBlueprint = JSON.parse(responseText);
    } catch (parseError) {
      console.error("AI response JSON parsing failed:", parseError, "Response was:", responseText);
      return NextResponse.json(
        { error: "Failed to compile strategies. Please submit again." },
        { status: 502 }
      );
    }

    const validationOutput = LaunchBlueprintSchema.safeParse(parsedBlueprint);
    if (!validationOutput.success) {
      console.error("Zod blueprint validation failed. Schema errors:", validationOutput.error.format());
      return NextResponse.json(
        { error: "Generated blueprint formatting was validation-invalid. Please retry." },
        { status: 502 }
      );
    }

    // 7. Success: Return verified structured blueprint to client
    return NextResponse.json(validationOutput.data);
  } catch (err: unknown) {
    // generic, safe error response. Never expose raw API exceptions.
    console.error("Unexpected error in AI Launch Planner route:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while planning. Please try again." },
      { status: 500 }
    );
  }
}
