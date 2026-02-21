import React, { useState } from "react";

const API_URL = "https://genai-production-d6e6.up.railway.app/chat";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    // show user message
    setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await res.json();

      setMessages(prev => [
        ...prev,
        { sender: "bot", text: data.reply }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "❌ Backend not reachable" }
      ]);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px"
      }}
    >
      <h2 style={{ textAlign: "center" }}>🤖 GenAI Troubleshooting Bot</h2>

      {/* Chat Box */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          height: "350px",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "10px",
          background: "#f9f9f9"
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "8px 0"
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "15px",
                background:
                  msg.sender === "user" ? "#007bff" : "#e5e5ea",
                color: msg.sender === "user" ? "white" : "black"
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}

        {loading && <p>Typing...</p>}
      </div>

      {/* Input */}
      <div style={{ display: "flex" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={handleSend}
          style={{
            marginLeft: "10px",
            padding: "10px 15px",
            borderRadius: "5px",
            background: "#28a745",
            color: "white",
            border: "none"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;