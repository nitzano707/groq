from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)

# קבלת מפתח ה-API ממשתני הסביבה
API_KEY = os.getenv("GROQ_API_KEY")
API_URL = "https://api.groq.com/v1/ai_inference"

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    prompt = data.get('prompt')
    
    # שליחת בקשה ל-API של GroqCloud
    response = requests.post(API_URL, headers={'Authorization': f'Bearer {API_KEY}'},
                             json={'prompt': prompt})
    result = response.json()
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
