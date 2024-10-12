async function sendPrompt() {
    const prompt = document.getElementById("promptInput").value;
    
    const response = await fetch("/api/generate", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    });

    try {
        const result = await response.json();
        console.log("API Response:", result);  // הדפסת התשובה המתקבלת בקונסולה

        // ניגש לכל שדה שאתה מזהה בתשובה המתקבלת
        document.getElementById("result").innerText = result.text || "No result"; 
    } catch (error) {
        console.error("Error parsing response:", error);
        document.getElementById("result").innerText = "Error occurred";
    }
}
