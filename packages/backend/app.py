import pandas as pd
from flask import Flask, request , jsonify
from flask_cors import CORS
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

app.run(port=3003)