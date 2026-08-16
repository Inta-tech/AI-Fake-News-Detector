from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
from pathlib import Path


# --------------------------------------------------
# Paths
# --------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / "ai-model" / "model" / "fake_news_svm.pkl"
VECTORIZER_PATH = BASE_DIR / "ai-model" / "model" / "tfidf_vectorizer.pkl"


# --------------------------------------------------
# Load AI model
# --------------------------------------------------

model = joblib.load(MODEL_PATH)
vectorizer = joblib.load(VECTORIZER_PATH)


# --------------------------------------------------
# FastAPI application
# --------------------------------------------------

app = FastAPI(
    title="AI Fake News Detector API",
    description="Machine Learning API for detecting fake and real news",
    version="1.0.0"
)

# Allow React frontend to communicate with FastAPI

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=False,
)

# --------------------------------------------------
# Request format
# --------------------------------------------------

class NewsRequest(BaseModel):
    title: str
    text: str


# --------------------------------------------------
# Home
# --------------------------------------------------

@app.get("/")
def home():
    return {
        "message": "AI Fake News Detector API is running!"
    }


# --------------------------------------------------
# Health check
# --------------------------------------------------

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


# --------------------------------------------------
# Prediction
# --------------------------------------------------

@app.post("/predict")
def predict_news(news: NewsRequest):

    # Combine title and article text
    content = news.title + " " + news.text

    # Convert text into TF-IDF features
    features = vectorizer.transform([content])

    # Make prediction
    prediction = model.predict(features)[0]

    # Convert numerical label to readable result
    if prediction == 0:
        result = "FAKE"
    else:
        result = "REAL"

    return {
        "prediction": result
    }