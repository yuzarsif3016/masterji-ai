# Context Management Approach

## Overview

One of the primary goals of this project is to provide natural, context-aware conversations instead of treating every message as an independent request.

To achieve this, the chatbot maintains a conversation history for each user session and sends the relevant context to the LLM with every request.

This enables the AI to understand follow-up questions, remember previous explanations, and maintain the selected teaching style throughout the conversation.

---

# Context Flow

The conversation follows the pipeline below.

```text
User Message
        │
        ▼
Session ID
        │
        ▼
Conversation Memory
        │
        ▼
Prompt Builder
        │
        ▼
OpenAI API
        │
        ▼
AI Response
        │
        ▼
Conversation Memory Updated
        │
        ▼
Response Returned to User
```

---

# Session Management

Each browser session generates a unique session identifier.

```javascript
const sessionId = crypto.randomUUID();
```

This identifier is sent with every API request.

Example:

```json
{
    "message": "Explain Java Streams",
    "persona": "hitesh",
    "sessionId": "9c8d0d4f-3f21-4fd6-8c2a-1b43..."
}
```

The session ID allows the backend to associate messages with the correct conversation.

Different browser tabs automatically receive different conversation histories.

---

# Memory Service

The backend includes a dedicated memory service.

Responsibilities include:

* Creating conversation history
* Storing messages
* Retrieving previous messages
* Limiting conversation size
* Returning context for the LLM

This logic is separated from the controller and OpenAI service to keep the architecture modular.

---

# Conversation Storage

For this assignment, conversations are stored in memory using a JavaScript `Map`.

Conceptually:

```text
Map

session-1
    ├── User
    ├── Assistant
    ├── User
    └── Assistant

session-2
    ├── User
    ├── Assistant
    └── User
```

This approach is lightweight, simple, and sufficient for a single-server demonstration.

---

# Limiting Conversation Size

Sending an entire conversation to the LLM on every request would increase latency and token usage.

To avoid this, only the most recent messages are retained.

Example:

```javascript
const MAX_MESSAGES = 10;
```

When the limit is exceeded, the oldest messages are removed before sending the request.

Benefits include:

* Faster responses
* Lower token usage
* Reduced API cost
* Consistent performance

---

# Building the Final Context

Before each request is sent to the LLM, the backend combines:

1. System prompt
2. Conversation history
3. Current user message

Conceptually:

```text
System Prompt

↓

Previous Messages

↓

Current User Question

↓

LLM
```

This enables the model to understand references such as:

> "Can you explain that again?"

or

> "Can you improve the previous example?"

without requiring the user to repeat the entire conversation.

---

# Example Conversation

User:

> Explain Java Streams.

Assistant:

> (Detailed explanation)

User:

> Can you show another example?

The second message is interpreted in the context of the first question, allowing the assistant to continue the discussion naturally.

---

# Benefits

The context management strategy provides several advantages:

* Natural follow-up conversations
* Better continuity
* Reduced repetition
* Improved teaching experience
* Consistent persona behavior
* Better overall user experience

---

# Limitations

The current implementation stores conversations only in server memory.

As a result:

* Conversations are lost when the server restarts.
* Memory is not shared across multiple server instances.
* Long-term conversation history is not preserved.

These limitations are acceptable for the scope of this assignment.

---

# Future Improvements

The architecture was intentionally designed so that the memory service can be replaced without affecting other components.

Possible enhancements include:

* Redis for shared session storage
* MongoDB or PostgreSQL for persistent conversations
* Conversation summarization for long chats
* User authentication with persistent chat history
* Vector databases for semantic memory
* Retrieval-Augmented Generation (RAG) for document-aware conversations

---

# Conclusion

The project uses a modular context management approach based on session IDs and conversation history.

By combining the generated system prompt, previous messages, and the current user input before every request, the chatbot maintains coherent, context-aware conversations while preserving the selected mentor's teaching style throughout the interaction.
