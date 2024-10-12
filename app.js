async function sendPrompt() {
    // קבלת הפרומפט מתוך שדה הטקסט
    const prompt = document.getElementById("promptInput").value;
    
    // שליחת בקשה ל-Backend בנתיב /api/generate
    const response = await fetch("/api/generate", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })  // פרומפט נשלח כבקשה ב-JSON
    });
    
    // טיפול בתשובה מה-Backend
    try {
        const result = await response.json();  // פרס את התשובה ל-JSON
        console.log("API Response:", result);  // הדפסת התשובה המתקבלת בקונסולה
        document.getElementById("result").innerText = result.text || "No result";  // הצגת התוצאה למשתמש
    } catch (error) {
        // במקרה של שגיאה
        console.error("Error parsing response:", error);  // הדפסת השגיאה לקונסולה
        document.getElementById("result").innerText = "Error occurred";  // הודעת שגיאה למשתמש
    }
}
