import React, { useState } from "react";
import axios from "axios";

const MotherDashboard: React.FC = () => {
  const [aiInput, setAiInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [mlResult, setMlResult] = useState("");

  const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const handleAiSubmit = async () => {
    if (!aiInput.trim()) return;
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            {
              role: "user",
              content: aiInput,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${openaiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      setAiResponse(response.data.choices[0].message.content);
    } catch (error) {
      setAiResponse("❌ Failed to fetch AI response. Check connection or API key.");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);

    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result as string;

      try {
        const response = await axios.post(
          "/api/analyze-image",
          { base64Image: base64 },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setMlResult(response.data.result || "✅ No health issue detected.");
      } catch {
        setMlResult("❌ Failed to analyze image. Please try again later.");
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ background: '#fff0f5', height: '100vh', overflow: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ minHeight: '100%', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <header style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '28px', color: '#D63384', fontWeight: 'bold' }}>🤱 Mother Dashboard</h2>
          <p style={{ color: '#555', fontSize: '16px' }}>Welcome! We're here to support your pregnancy journey.</p>
        </header>

        <section style={{ background: '#fff', borderRadius: 12, padding: '20px', marginBottom: '20px', boxShadow: '0 1px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#D63384', fontSize: '20px', marginBottom: '8px' }}>📅 Pregnancy Tracker</h3>
          <p style={{ fontSize: '16px' }}>⏳ 24 Weeks - 2nd Trimester</p>
          <p style={{ fontSize: '16px' }}>📌 Due Date: October 30, 2025</p>
        </section>

        <section style={{ background: '#fff', borderRadius: 12, padding: '20px', marginBottom: '20px', boxShadow: '0 1px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#D63384', fontSize: '20px', marginBottom: '8px' }}>💡 Daily Health Tips</h3>
          <ul style={{ fontSize: '16px', paddingLeft: '20px' }}>
            <li>🍲 Eat iron-rich foods (malunggay, liver)</li>
            <li>💧 Drink 8+ glasses of water</li>
            <li>🚶‍♀️ Light exercise daily</li>
          </ul>
        </section>

        <section style={{ background: '#fff', borderRadius: 12, padding: '20px', marginBottom: '20px', boxShadow: '0 1px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#D63384', fontSize: '20px', marginBottom: '8px' }}>📝 Log Symptoms</h3>
          <input type="text" placeholder="e.g. headache, nausea, dizziness, swelling, cramping, fatigue, blurred vision, constipation, shortness of breath, back pain, heart palpitations, spotting, discharge, chest pain, contractions, mood swings, anxiety, depression, leg cramps, fever" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
          <button style={{ width: '100%', padding: '10px', background: '#D63384', color: '#fff', borderRadius: '8px', border: 'none' }}>Submit Symptom</button>
        </section>

        <section style={{ background: '#fff', borderRadius: 12, padding: '20px', marginBottom: '20px', boxShadow: '0 1px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#D63384', fontSize: '20px', marginBottom: '8px' }}>🔔 Upcoming Check-up</h3>
          <p style={{ fontSize: '16px' }}>📍 July 25, 2025 @ Barangay Health Center - Alae</p>
        </section>

        <section style={{ background: '#fff', borderRadius: 12, padding: '20px', marginBottom: '20px', boxShadow: '0 1px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#D63384', fontSize: '20px', marginBottom: '8px' }}>🤖 Ask the AI</h3>
          <div style={{ background: '#fff5f7', padding: '12px', borderRadius: '6px', marginBottom: '10px', fontSize: '16px' }}>
            {aiResponse || 'AI: Hello! I\'m here to answer your questions about pregnancy 🩺'}
          </div>
          <input type="text" value={aiInput} onChange={(e) => setAiInput(e.target.value)} placeholder="Ask me something..." style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '8px' }} />
          <button onClick={handleAiSubmit} style={{ width: '100%', padding: '10px', background: '#D63384', color: '#fff', borderRadius: '8px', border: 'none' }}>Ask</button>
        </section>

        <section style={{ background: '#fff', borderRadius: 12, padding: '20px', marginBottom: '40px', boxShadow: '0 1px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#D63384', fontSize: '20px', marginBottom: '8px' }}>📷 Upload Photo</h3>
          <input type="file" onChange={handleImageUpload} style={{ marginBottom: '12px' }} accept="image/*" capture="environment" />
          {imageFile && (
            <div style={{ background: '#fde2e4', padding: '12px', borderRadius: '6px', fontSize: '16px' }}>
              🖼️ Uploaded: {imageFile.name} <br />
              {mlResult}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MotherDashboard;