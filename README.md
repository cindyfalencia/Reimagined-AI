# Honoring the Departed with LLM-Avatar

This project is a full-stack web application that uses AI to create a personalized 3D avatar and simulate conversations based on the MBTI personality type of a departed loved one. It allows users to upload text and image data, performs personality analysis via LLM, and generates an interactive chatbot powered by OpenAI, with the avatar rendered using Three.js and Avaturn.

---

## 🛠 Prerequisites

- Node.js (v18 or higher)  
- npm or yarn  
- Python 3.8+  
- Docker (optional for deployment)  
- Git  
- OpenAI API Key

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/cindyfalencia/Reimagined-AI.git
cd reimagined-ai
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
OPENAI_API_KEY=your_openai_key_here
```

### 3. Install Dependencies

```bash
yarn install
```

### 4. Run the Application Locally

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to access the app.

---

## 🧩 Architecture Overview

- **Frontend**: React + Next.js (App Router)  
- **Backend**: Python (FastAPI)  
- **LLM Integration**: OpenAI GPT-4  
- **Avatar Generator**: Avaturn + Three.js  
- **Database**: Supabase for data storage

---

## 🧠 MBTI Analysis

- Combines a trained Random Forest model and a rule-based LLM-style system
- Outputs include MBTI type, confidence score, and dimensional breakdown

---

## ✅ Testing

- Unit tests for MBTI logic and utilities using Jest
- Edge cases tested: empty input, balanced traits, personality extremes

---

## 🧯 Troubleshooting

- **Environment Variables**: Check your `.env.local` file  
- **Port Conflicts**: Ensure port 3000 is available  
- **OpenAI Access Issues**: Set a proxy `BASE_URL` if OpenAI is blocked

---
