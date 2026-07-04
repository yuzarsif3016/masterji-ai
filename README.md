# 🤖 MasterJi AI

> **An AI-powered programming mentor that simulates conversations inspired by the publicly observable teaching styles of Hitesh Choudhary and Piyush Garg.**

MasterJi AI is an LLM-powered chatbot that demonstrates how prompt engineering can be used to create distinct educational personas. Users can switch between two AI mentors, each following a different teaching philosophy while maintaining context-aware conversations.

> **Disclaimer:** This project is an educational demonstration built for the GenAI Cohort Assignment. The chatbot does **not** claim to be or impersonate Hitesh Choudhary or Piyush Garg. It is an AI assistant inspired by their publicly observable educational styles.

---

# 🌐 Live Links

**🚀 Live Application**

https://masterji-ai.vercel.app/

**📂 GitHub Repository**

https://github.com/yuzarsif3016/masterji-ai.git

---

# 📖 Project Overview

MasterJi AI demonstrates how Large Language Models (LLMs) can simulate different educational teaching styles using prompt engineering.

Instead of simply answering questions, the chatbot behaves like a programming mentor and adapts its responses based on the selected persona.

The project supports two mentor personas:

## 🎯 Hitesh-Inspired Mentor

* Friendly and approachable
* Concept-first explanations
* Project-based learning
* Encouraging and beginner-friendly
* Focuses on learning through practice

---

## 🎯 Piyush-Inspired Mentor

* Engineering-first mindset
* Architecture-oriented explanations
* Production-focused discussions
* Structured communication
* Emphasizes software engineering principles

Users can switch between personas at any time while maintaining conversation context.

---

# ✨ Features

* 🤖 OpenAI GPT Integration
* 🎭 Dual AI Personas
* 🔄 Persona Switching
* 💬 Context-Aware Conversations
* 🧠 Session-Based Memory
* 📝 Markdown Rendering
* 💻 Syntax Highlighting
* 📋 Copy Code Button
* ⚡ Express.js Backend
* 🎨 Responsive Chat Interface
* 📚 Modular Prompt Engineering
* 🧩 Clean Project Architecture

---

# 🛠 Tech Stack

## Frontend

* HTML5
* CSS3
* Vanilla JavaScript
* Marked.js
* Highlight.js

---

## Backend

* Node.js
* Express.js
* OpenAI SDK
* dotenv
* CORS

---

## AI Model

* OpenAI GPT

---

# 🏗 System Architecture

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
      OpenAI GPT
          │
          ▼
      AI Response
```

The frontend communicates with an Express backend through a REST API.

Before every request, the backend dynamically constructs the final system prompt by combining:

* Common Prompt
* Persona Prompt
* Persona Research
* Conversation History

This prompt is then sent to the OpenAI API, enabling context-aware conversations while preserving the selected mentor's teaching style.

---

# 📂 Project Structure

```text
masterji-ai/

├── client/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── prompts/
│   ├── research/
│   ├── utils/
│   ├── docs/
│   ├── package.json
│   └── server.js
│
├── README.md
└── .gitignore
```

---

# 🧠 Prompt Engineering Strategy

The project uses a modular prompt engineering architecture rather than relying on one large prompt.

The final prompt is dynamically generated using:

```text
Common Prompt
        +
Persona Prompt
        +
Persona Research
        +
Conversation History
        +
Current User Question
        =
Final Prompt
```

This approach provides:

* Better maintainability
* Cleaner architecture
* Improved persona consistency
* Easy addition of future personas

Detailed documentation is available in:

* `server/docs/prompt-engineering.md`

---

# 📚 Persona Research

The personas were created by studying publicly available educational material such as:

* Official websites
* Public YouTube videos
* Technical talks
* Blogs
* Public GitHub repositories
* Course descriptions

The implementation focuses on teaching philosophy and communication style rather than copying transcripts or distinctive wording.

Detailed research documentation is available in:

* `server/docs/persona-research.md`

---

# 💬 Context Management

Each conversation is associated with a unique session ID.

The backend stores conversation history and sends previous messages along with the current user prompt to the LLM.

This enables:

* Context-aware conversations
* Natural follow-up questions
* Reduced repetition
* Consistent persona behavior

Documentation:

* `server/docs/context-management.md`

---

# 📄 Sample Conversations

Example conversations demonstrating the behavioral differences between both personas are available in:

* `server/docs/sample-conversations.md`

---

# ⚙ Installation

Clone the repository:

```bash
git clone https://github.com/yuzarsif3016/masterji-ai.git
```

Navigate to the backend:

```bash
cd masterji-ai/server
```

Install dependencies:

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` directory.

```env
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

---

# ▶ Running the Project

Start the backend server:

```bash
npm run dev
```

Open the frontend by serving the `client` directory using your preferred local server.

---

# 📊 Assignment Requirement Mapping

| Assignment Requirement   | Implementation                                                          |
| ------------------------ | ----------------------------------------------------------------------- |
| AI-powered Website       | ✅ OpenAI GPT Integration                                                |
| LLM-Based Chat Interface | ✅ Express + OpenAI SDK                                                  |
| Hitesh Persona           | ✅ Prompt-based AI mentor inspired by publicly observable teaching style |
| Piyush Persona           | ✅ Prompt-based AI mentor inspired by publicly observable teaching style |
| Persona Switching        | ✅ Dynamic persona selection                                             |
| Context Management       | ✅ Session-based conversation memory                                     |
| Prompt Engineering       | ✅ Modular prompt builder architecture                                   |
| Documentation            | ✅ Included in `server/docs`                                             |
| Public GitHub Repository | ✅ Completed                                                             |
| Live Deployment          | ✅ Vercel (Frontend) + Render (Backend)                                  |

---

# 🔮 Future Improvements

* Redis-based persistent conversation memory
* User authentication
* Chat history persistence
* Streaming AI responses
* Voice interaction
* Image understanding
* Retrieval-Augmented Generation (RAG)
* Additional mentor personas
* Theme customization
* Mobile application

---

# 🙏 Acknowledgements

This project was built as part of the **GenAI Cohort Assignment**.

Special thanks to the creators whose publicly available educational content inspired the teaching styles used in this project.

This implementation is intended solely for educational purposes and does not represent, impersonate, or claim endorsement from Hitesh Choudhary or Piyush Garg.

---

# 👨‍💻 Author

**Yusuf Pathan**

Built with ❤️ using Node.js, Express.js, OpenAI, and modern prompt engineering techniques.
