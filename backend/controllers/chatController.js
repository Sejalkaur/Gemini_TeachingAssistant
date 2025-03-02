const { GoogleGenerativeAI } = require("@google/generative-ai");  // Import gemini sdk
require("dotenv").config();  // Load environment variables


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY); // Load API key

const askGemini = async (req, res) => {
    try {
        const { leetcode_link, doubt } = req.body;  // Get both inputs from user

        // Validate input
        if (!leetcode_link || !doubt) {
            return res.status(400).json({ error: "LeetCode link and doubt are required." });
        }

        // Construct a more detailed prompt
        const prompt = `
            A user is struggling with a LeetCode problem and needs guidance.
            LeetCode Problem: ${leetcode_link}
            User's Doubt: ${doubt}
            
            As a helpful AI tutor, provide hints, thought processes, and explanations 
            without directly giving the answer. Focus on:
            1. Identifying the key concepts needed to solve this problem.
            2. Suggesting similar problems that might help the user.
            3. Asking guiding questions to help the user think in the right direction.
        `;
        const model = genAI.getGenerativeModel({model: 'gemini-1.5-pro-002'});
        const result = await model.generateContent(prompt);

        console.log("Gemini API Response:", JSON.stringify(result, null, 2)); // Log the entire response

        if (!result || !result.response || !result.response.candidates || result.response.candidates.length === 0) {
            return res.status(500).json({ error: "Invalid response from Gemini API." });
        }

        //extract text response from gemini
        const responseText = result.response.candidates?.[0]?.content?.parts?.map(part => part.text).join(" ") || "No respose generated.";
        // const response = result.response;
        res.json({reply: responseText });

        

    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Something went wrong  with Gemini API Error" });
    }
};

module.exports = { askGemini };
