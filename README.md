# 🤖 MasterJi AI

> **An AI-powered programming mentor that simulates conversations inspired by the publicly observable teaching styles of Hitesh Choudhary and Piyush Garg.**

MasterJi AI is an LLM-powered chatbot that allows users to learn programming from two distinct AI mentors. Each persona follows a different teaching philosophy while maintaining context-aware conversations and high-quality technical explanations.

> **Disclaimer:** This project is an educational demonstration. The chatbot does **not** claim to be the real Hitesh Choudhary or Piyush Garg. It is an AI assistant inspired by their publicly observable educational styles.

---

# 📖 Table of Contents

* Project Overview
* Features
* Demo
* Tech Stack
* Architecture
* Folder Structure
* Prompt Engineering Strategy
* Persona Research
* Context Management
* Installation
* Environment Variables
* Running the Project
* Screenshots
* Evaluation Mapping
* Future Improvements
* License

---

# 🚀 Project Overview

The objective of this project is to demonstrate how prompt engineering and LLMs can be used to simulate different educational teaching styles.

The chatbot supports two mentor personas:

### 🎯 Hitesh-Inspired Mentor

* Friendly and approachable
* Project-based learning
* Beginner focused
* Concept-first explanations
* Encouraging tone

---

### 🎯 Piyush-Inspired Mentor

* Engineering mindset
* Architecture-first explanations
* Backend-oriented
* Production-focused
* Structured communication

Users can switch between personas at any time while maintaining separate conversation context.

---

# ✨ Features

* 🤖 OpenAI GPT-4.1 Integration
* 🎭 Dual AI Personas
* 🔄 Persona Switching
* 💬 Context-Aware Conversations
* 🧠 Conversation Memory
* 📝 Markdown Rendering
* 💻 Syntax Highlighting
* 📋 Copy Code Button
* ⚡ Express Backend
* 🎨 Responsive Chat UI
* 📚 Modular Prompt Engineering
* 🧩 Clean Project Architecture

---

# 🎥 Demo

## Live Application

Frontend:

```text
(Add your Vercel URL here)
```

Backend API:

```text
(Add your Render URL here)
```

---

# 🛠 Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)
* Marked.js
* Highlight.js

---

## Backend

* Node.js
* Express.js
* OpenAI SDK
* CORS
* dotenv

---

## AI

* OpenAI GPT-4.1

---

# 🏗 Architecture

```text
                        User
                          │
                          ▼
                 Frontend (HTML/CSS/JS)
                          │
                          ▼
                 Express REST API
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
   Prompt Builder    Memory Service   OpenAI Service
          │
          ▼
    Common Prompt
          +
   Persona Prompt
          +
 Persona Research
          │
          ▼
      OpenAI GPT-4.1
          │
          ▼
      AI Response
```

---

# 📂 Folder Structure

```text
masterji-ai/

│

├── client/

│   ├── index.html

│   ├── style.css

│   ├── app.js

│

├── server/

│   ├── controllers/

│   ├── prompts/

│   ├── research/

│   ├── routes/

│   ├── services/

│   ├── utils/

│   ├── server.js

│

├── docs/

│   ├── persona-research.md

│   ├── prompt-engineering.md

│   ├── context-management.md

│   ├── sample-conversations.md

│

├── README.md

└── .env
```

---

# 🧠 Prompt Engineering Strategy

Instead of relying on a single prompt, the project dynamically constructs the final prompt using multiple components.

```text
Common Prompt

+

Persona Prompt

+

Persona Research

+

Conversation History

↓

Final Prompt
```

Benefits:

* Cleaner architecture
* Better maintainability
* Easier addition of future personas
* Improved consistency

For more details, see:

```text
docs/prompt-engineering.md
```

---

# 📚 Persona Research

Personas were created by studying publicly available educational material.

Sources included:

* Official websites
* Public YouTube videos
* Public blogs
* Public talks
* Public GitHub repositories
* Public course descriptions

The implementation focuses on teaching philosophy and communication style rather than copying transcripts or distinctive wording.

---

# 💬 Context Management

Conversation history is maintained using a unique session ID.

Each request contains:

* Current user message
* Conversation history
* Persona selection
* Generated system prompt

This enables natural follow-up conversations.

---

# ⚙ Installation

Clone the repository.

```bash
git clone <repository-url>
```

Go to the project.

```bash
cd masterji-ai
```

Install backend dependencies.

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` directory.

```env
OPENAI_API_KEY=your_api_key
PORT=3000
```

---

# ▶ Running the Project

Start the backend.

```bash
npm run dev
```

Open the frontend.

```
client/index.html
```

Or serve it using your preferred local server.

---

# 📸 Screenshots

Add screenshots after deployment.

Suggested screenshots:

* Home Screen
* Persona Switching
* Hitesh Conversation
* Piyush Conversation
* Code Highlighting
* Mobile View

---

# 📊 Evaluation Mapping

| Requirement          | Status               |
| -------------------- | -------------------- |
| AI Website           | ✅                    |
| LLM Integration      | ✅                    |
| Persona Switching    | ✅                    |
| Hitesh Persona       | ✅                    |
| Piyush Persona       | ✅                    |
| Context Management   | ✅                    |
| Documentation        | ✅                    |
| Sample Conversations | ✅                    |
| GitHub Repository    | ✅                    |
| Live Deployment      | ✅ (After deployment) |

---

# 🔮 Future Improvements

* Redis-based conversation memory
* Authentication
* Persistent chat history
* Voice conversations
* Streaming responses
* Image understanding
* Additional mentor personas
* RAG with personal notes
* Dark/Light theme switch
* Mobile application

---

# 📜 License

This project was created for educational purposes as part of the **GenAI Cohort Assignment**.

It is intended to demonstrate prompt engineering, LLM integration, persona design, and conversational AI techniques.

The chatbot is inspired by publicly observable educational styles and does not represent or impersonate any individual.

---

# 👨‍💻 Author

**Yusuf Pathan**

Built with ❤️ using Node.js, Express.js and OpenAI GPT-4.1.
