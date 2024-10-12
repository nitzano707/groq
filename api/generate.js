// api/generate.js
export default async function handler(req, res) {
    const { prompt } = req.body;

    // קריאה ל-API החיצוני (GroqCloud)
    const response = await fetch("https://api.groq.com/v1/ai_inference", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({ prompt: prompt })
    });

    const result = await response.json();
    res.status(200).json({ text: result.text });
}
