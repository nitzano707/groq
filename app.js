async function sendPrompt() {
    const prompt = document.getElementById("promptInput").value;
    
    const response = await fetch("https://api.groq.com/v1/ai_inference", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`  // זכרו לשמור את ה-API Key בצורה מאובטחת במשתני סביבה
        },
        body: JSON.stringify({ prompt: prompt })
    });
    
    const result = await response.json();
    document.getElementById("result").innerText = result.text || "No result";
}
