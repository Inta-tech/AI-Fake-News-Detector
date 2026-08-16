# 📰 AI Fake News Detection System

An AI-powered web application that uses **Machine Learning and Natural Language Processing (NLP)** to detect potentially fake or misleading news articles and assess their credibility.

## 🚀 Features

* 🔍 **Fake News Detection** — Predict whether a news article is real or potentially fake.
* 🤖 **AI/NLP Analysis** — Processes and analyzes textual content using machine learning techniques.
* 📊 **Confidence Score** — Displays the model's confidence in its prediction.
* 📝 **News Text Analysis** — Users can paste an article or news content for analysis.
* 🌐 **Web-Based Interface** — Simple and user-friendly interface for checking news.
* 📈 **Prediction History** — Store and review previous analyses.
* 🔐 **User Authentication** — Secure registration and login system.

## 🛠️ Technologies Used

### Backend & AI

* **Python**
* **FastAPI**
* **Scikit-learn**
* **NLTK / spaCy**
* **Transformers**
* **Pandas & NumPy**

### Frontend

* **React.js**
* **HTML5**
* **CSS3**
* **JavaScript**

### Database

* **MySQL**

### Tools

* **Git & GitHub**
* **VS Code / PyCharm**
* **Postman**

## 🧠 How It Works

```text
User enters news article
          ↓
Text Preprocessing
          ↓
NLP Feature Extraction
          ↓
Machine Learning Model
          ↓
Fake / Real Prediction
          ↓
Confidence Score & Result
```

## 📂 Project Structure

```text
AI-Fake-News-Detection/
│
├── backend/
│   ├── main.py
│   ├── models/
│   ├── services/
│   ├── utils/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── dataset/
│   └── news_dataset.csv
│
├── model/
│   └── trained_model.pkl
│
├── README.md
└── .gitignore
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/AI-Fake-News-Detection.git
cd AI-Fake-News-Detection
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it:

**Windows:**

```bash
venv\Scripts\activate
```

**Linux/macOS:**

```bash
source venv/bin/activate
```

### 3. Install Python dependencies

```bash
pip install -r backend/requirements.txt
```

### 4. Configure the database

Create a MySQL database and update the database credentials in the backend configuration.

### 5. Run the backend

```bash
uvicorn backend.main:app --reload
```

### 6. Run the frontend

```bash
cd frontend
npm install
npm start
```

## 📊 Machine Learning

The system can be trained using a labeled news dataset containing **real and fake news articles**.

The ML pipeline includes:

1. Data collection
2. Data cleaning
3. Text preprocessing
4. Tokenization
5. Feature extraction
6. Model training
7. Model evaluation
8. Prediction

Possible models include:

* Logistic Regression
* Naive Bayes
* Random Forest
* Support Vector Machine (SVM)
* BERT / Transformer-based models

## 🎯 Future Improvements

* 🔎 Automatic fact-checking using trusted online sources
* 🌐 URL-based news analysis
* 🧠 Advanced Transformer-based detection
* 📚 Source credibility scoring
* 🌍 Multi-language fake news detection
* 📱 Mobile-friendly interface
* 📊 Advanced analytics dashboard
* ⚡ Real-time misinformation monitoring

## ⚠️ Disclaimer

This system provides an **AI-based prediction** and should not be considered an absolute determination of whether a news article is true or false. Users should verify important information through reliable and independent sources.

## 👨‍💻 Authors

Developed as an academic/project initiative to explore **Artificial Intelligence, Machine Learning, Natural Language Processing, and Web Development**.

---

⭐ **If you find this project useful, consider giving the repository a star!**
