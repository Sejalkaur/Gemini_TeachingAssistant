# Gemini_TeachingAssistant
A simple chat-based UI that helps users understand Data Structures and Algorithms (DSA) problems by interacting with an AI-powered teaching assistant. The assistant provides hints, guiding questions, and conceptual insights to help users think through problems rather than providing direct answers.

🚀 Features
✅ Chat Interface - Users can interact with the AI assistant.
✅ LeetCode Link Submission - Users can submit a LeetCode problem URL along with their doubts.
✅ AI-Powered Guidance - The assistant provides hints, related examples, and problem-solving techniques.
✅ Interactive Learning - Instead of direct answers, AI offers step-by-step guidance to build intuition.

🛠️ Setup Instructions
1️⃣ Prerequisites
Make sure you have the following installed:

Node.js (v16 or later)
npm or yarn
API Key from Gemini AI (or OpenAI if using GPT)

2️⃣ Clone the Repository
bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

3️⃣ Install Dependencies
bash
npm install

4️⃣ Set Up Environment Variables
Create a .env file in the root directory and add:

.env

REACT_APP_GEMINI_API_KEY=your_api_key_here
(If using OpenAI GPT, replace with the corresponding API key.)

5️⃣ Start the Development Server
bash

npm start
This will launch the application at http://localhost:3000/.

📌 Application Architecture
🖥️ Frontend (React.js)
Chat UI where users can:
Submit a LeetCode problem URL.
Ask doubts about the problem.
Receive AI-powered hints instead of direct answers.
State Management using React Hooks.

⚙️ Backend (Node.js / Express)
Communicates with the Gemini AI API.
Processes user input and ensures no direct answers are provided.
Uses pre-defined prompts to guide users towards the solution.
📖 How to Use the Application
Open the Chat Interface.
Enter the LeetCode problem URL.
Describe your doubt about the problem.
Receive AI-generated hints and guidance.
Use the hints to think through the problem instead of getting direct answers.

🤖 How GPT Integration Works
1️⃣ Input Processing
User enters a LeetCode problem URL + their specific doubt.
The input is sent to the Gemini AI API.
2️⃣ AI Response Strategy

The AI is programmed to: 
✅ Ask guiding questions to make users think.
✅ Provide conceptual hints rather than solutions.
✅ Give related examples to strengthen problem-solving intuition.
✅ Avoid direct answers to ensure interactive learning.

