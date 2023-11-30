import pandas as pd
from flask import Flask, request , jsonify
from flask_cors import CORS
import requests
from sklearn.linear_model import LinearRegression
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.pipeline import make_pipeline

app = Flask(__name__)
CORS(app)

df = pd.read_csv('./text-quality.csv')

texts = df['words'].tolist()
rates = df['rates'].tolist()

model = make_pipeline(CountVectorizer(), LinearRegression())
model.fit(texts, rates)

def statement_separation(text, model):
    split_words = text.lower().split()
    prediction_rates = []

    for word in split_words:
        prediction = model.predict([word])[0]
        prediction_rates.append((word, prediction))
    return prediction_rates

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if 'text' not in data:
        return jsonify({'error': 'Missing "text" parameter'}), 400
    text = data['text']
    predictions = statement_separation(text, model)
    average_rate = sum(prediction[1] for prediction in predictions) / len(predictions)
    result = {
        'average_rate': average_rate
    }
    return jsonify(result)

@app.route('/correct-text', methods=['POST'])
def correct_text():
    url = "https://textgears-textgears-v1.p.rapidapi.com/correct"
    payload = request.json
    headers = {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "ee62be61efmshc958358ab3ee3c4p102b79jsn1de9fd164bca",
        "X-RapidAPI-Host": "textgears-textgears-v1.p.rapidapi.com"
    }
    try:
        response = requests.post(url, data=payload, headers=headers)
        response_data = response.json()
        return jsonify(response_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
app.run(port=3003)