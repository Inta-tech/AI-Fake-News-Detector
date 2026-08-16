# 🛡️ AI Fake News Detector

An AI-powered web application that analyzes news articles and classifies them as **FAKE** or **REAL** using Machine Learning.

The system uses **TF-IDF** for text feature extraction and a **Support Vector Machine (SVM)** classifier for prediction. A **FastAPI** backend connects the trained ML model to a modern **React** frontend.

---

## 📌 Project Overview

Fake news can spread rapidly through online platforms and make it difficult for people to distinguish reliable information from misleading content.

This project aims to provide a simple web-based system where users can enter a news headline and article and receive an AI-based classification.

### How it works

```text
News Headline + Article
          ↓
     Text Processing
          ↓
        TF-IDF
          ↓
   SVM Classification
          ↓
      FAKE / REAL
          ↓
     React Interface
```

---

## ✨ Features

* 📰 Enter a news headline and article
* 🤖 Machine-learning-based fake news detection
* 🔍 TF-IDF text feature extraction
* 🧠 Support Vector Machine classification
* ⚡ Fast prediction through FastAPI
* 🎨 Modern and responsive React interface
* 🔄 Loading and prediction states
* 🛡️ Clear FAKE/REAL classification results
* 📊 Model performance evaluation
* 🔌 REST API for communication between frontend and backend

---

## 🧠 Machine Learning

Several classification algorithms were evaluated during the project.

| Model                            |   Accuracy |
| -------------------------------- | ---------: |
| Naive Bayes                      |     93.52% |
| Logistic Regression              |     98.57% |
| **Support Vector Machine (SVM)** | **99.51%** |

Based on the evaluation results, **SVM was selected as the final classification model**.

### SVM Performance

```text
Accuracy: 99.51%

              precision    recall  f1-score   support

Fake             1.00      0.99      1.00       4696
Real             0.99      1.00      0.99       4242

Accuracy                              1.00       8938
Macro Avg          1.00      1.00      1.00       8938
Weighted Avg       1.00      1.00      1.00       8938
```

> **Note:** The reported accuracy represents performance on the project's test set. It should not be interpreted as a guarantee that every real-world article will be classified correctly.

---

## 🔬 Methodology

### 1. Data Preparation

The news dataset is cleaned and prepared for machine learning.

The dataset is divided into:

* Training data
* Testing data

### 2. Text Representation

The headline and article content are combined and converted into numerical features using **TF-IDF (Term Frequency–Inverse Document Frequency)**.

```text
News Text
   ↓
TF-IDF Vectorizer
   ↓
Numerical Feature Vector
```

### 3. Model Training

Multiple machine learning algorithms are evaluated.

The SVM classifier achieved the highest test accuracy among the evaluated models and was selected for the application.

### 4. Prediction

When a user submits an article:

```text
Title + Article
      ↓
TF-IDF Vectorizer
      ↓
SVM Model
      ↓
FAKE / REAL
```

---

## 🏗️ System Architecture

```text
┌──────────────────────────┐
│     React Frontend       │
│                          │
│  Headline + Article      │
└────────────┬─────────────┘
             │
             │ HTTP POST
             ▼
┌──────────────────────────┐
│      FastAPI Backend     │
│                          │
│      /predict            │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│     TF-IDF Vectorizer    │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│      SVM Classifier      │
│      99.51% Accuracy     │
└────────────┬─────────────┘
             │
             ▼
        FAKE / REAL
```

---

## 🛠️ Technology Stack

### Machine Learning

* Python
* Scikit-learn
* Pandas
* NumPy
* TF-IDF
* Support Vector Machine
* Naive Bayes
* Logistic Regression
* Joblib

### Backend

* Python
* FastAPI
* Uvicorn
* Pydantic
* CORS Middleware

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* Lucide React

### Development Tools

* PyCharm
* Jupyter Notebook
* Git
* GitHub

---

## 📁 Project Structure

```text
AI-Fake-News-Detector/
│
├── ai-model/
│   └── model/
│       ├── fake_news_svm.pkl
│       └── tfidf_vectorizer.pkl
│
├── backend/
│   └── main.py
│
├── dataset/
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── notebooks/
│   └── ...
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Prerequisites

Make sure you have installed:

* Python 3.12+
* Node.js
* npm
* Git

---

## 🚀 Running the Backend

Open a terminal in the project directory:

```powershell
cd "AI fake news detector"
```

Activate the Python virtual environment:

```powershell
.\.venv\Scripts\Activate.ps1
```

Start FastAPI:

```powershell
python -m uvicorn backend.main:app --reload
```

The API will run at:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 💻 Running the Frontend

Open a **second terminal**:

```powershell
cd "AI fake news detector\frontend"
```

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Vite will provide a local URL similar to:

```text
http://localhost:5173/
```

The exact port may vary if another application is already using the default port.

---

## 🔌 API

### Health Check

```http
GET /health
```

Example response:

```json
{
  "status": "healthy"
}
```

### News Prediction

```http
POST /predict
```

Request:

```json
{
  "title": "Example news headline",
  "text": "Example news article content."
}
```

Response:

```json
{
  "prediction": "FAKE"
}
```

Possible predictions:

```text
FAKE
REAL
```

---

## 🧪 Example

### Input

**Headline:**

```text
Scientists discover a completely impossible miracle cure
```

**Article:**

```text
A new study claims that a simple household method can instantly
cure every known disease without medical treatment.
```

### Output

```text
LIKELY FAKE NEWS

The trained SVM model classified this article as FAKE.
```

---

## 📊 Model Comparison

The project evaluated multiple machine learning approaches.

### Naive Bayes

```text
Accuracy: 93.52%
```

### Logistic Regression

```text
Accuracy: 98.57%
```

### Support Vector Machine

```text
Accuracy: 99.51%
```

The SVM model was selected because it produced the highest test accuracy among the evaluated models.

---

## 🔐 Security & Configuration

The application currently runs locally during development.

The frontend communicates with the FastAPI backend through HTTP requests.

CORS is configured in FastAPI to allow communication with the frontend during development.

For production deployment, the API URL and CORS configuration should be updated to use the deployed frontend and backend domains.

---

## ⚠️ Limitations

This system is a machine-learning-based classification tool and should not be considered a definitive source of truth.

Some limitations include:

* The model depends on the characteristics of its training dataset.
* Unseen writing styles may affect prediction performance.
* The classifier identifies patterns in text rather than verifying claims against authoritative sources.
* A high test accuracy does not guarantee perfect real-world performance.
* The current system provides a classification rather than factual verification.

Therefore, users should verify important information using reliable sources.

---

## 🔮 Future Improvements

Possible future improvements include:

* 📈 Confidence score for predictions
* 📊 Interactive model performance dashboard
* 🕘 Prediction history
* 🧠 Explainable AI for prediction reasoning
* 🌐 Deployment of the FastAPI backend
* 🚀 GitHub Pages deployment for the frontend
* 🔎 Integration with external fact-checking sources
* 📰 Support for news URLs
* 👤 User accounts and personalized history
* 📱 Further mobile optimization

---

## 🎯 Project Goal

The goal of this project is to demonstrate how **Natural Language Processing, Machine Learning, FastAPI, and React** can be combined to create a practical AI-powered web application.

---

## 👨‍💻 Author

**Intasar Mostafiz**

Computer Science & Engineering Student

Bangladesh University of Professionals

---

## 📄 License

This project is developed for educational and academic purposes.
