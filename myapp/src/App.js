import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5001/api/chat", {
        leetcode_link: "https://leetcode.com/problems/example",
        doubt: input,
      });

      const aiMessage = {
        role: "ai",
        text: res.data.reply || "Sorry, I couldn't understand that.",
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);  // ✅ Fix applied here
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="chat-box">
        <h1>💬 Gemini AI Chat</h1>
        <div className="messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              {msg.text}
            </div>
          ))}
          {loading && <div className="message loading">Typing...</div>}
          <div ref={chatRef}></div>
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask Gemini..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;
