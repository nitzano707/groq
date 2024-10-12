async function sendPrompt() {
    const prompt = document.getElementById("promptInput").value;
    
    const response = await fetch("/api/generate", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    });
    
    const result = await response.json();
    document.getElementById("result").innerText = result.text || "No result";
}
