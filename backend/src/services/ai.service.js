const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

async function runGemini() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = "Explain how AI works in a few words";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

runGemini();
