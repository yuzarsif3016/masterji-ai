# Prompt Engineering Strategy

## Overview

The chatbot uses a modular prompt engineering strategy instead of relying on one large static prompt.

The objective is to produce consistent, context-aware responses while maintaining distinct teaching styles for each persona.

The prompt is assembled dynamically before every request sent to the LLM.

---

# Prompt Architecture

The final system prompt is constructed from multiple components.

```text
Common Prompt
        +
Persona Prompt
        +
Persona Research
        +
Conversation Context
        +
Current User Question
        =
Final Prompt
```

Each component has a specific responsibility.

---

# 1. Common Prompt

The common prompt contains instructions that apply to every conversation regardless of the selected persona.

It includes:

* AI identity
* Technical accuracy
* Markdown formatting
* Code formatting
* Hallucination prevention
* Safety rules
* Context awareness
* Response quality expectations

The common prompt intentionally does **not** define the teaching style. This avoids making different personas sound identical.

---

# 2. Persona Prompt

Each mentor has a dedicated persona prompt.

The persona prompt defines:

* Teaching philosophy
* Communication style
* Explanation workflow
* Beginner handling
* Advanced learner handling
* Coding preferences
* Engineering mindset
* Reflection checklist

Separating persona behavior from the common prompt makes the architecture easier to maintain and extend.

---

# 3. Persona Research

Before writing prompts, publicly available information about each mentor was studied.

The research focused on:

* Teaching approach
* Communication style
* Explanation patterns
* Educational philosophy
* Observable characteristics

The implementation intentionally avoids copying transcripts or distinctive wording.

Instead, the prompts are based on recurring educational patterns.

---

# 4. Prompt Builder

The project contains a dedicated prompt builder.

The prompt builder combines:

* Common prompt
* Persona prompt
* Persona research

to produce the final system prompt used for each request.

This avoids duplicating prompt logic across multiple files.

---

# 5. Context Injection

The chatbot remembers the ongoing conversation.

Before every request:

1. The current system prompt is generated.
2. Previous conversation messages are added.
3. The current user message is appended.
4. The complete context is sent to the LLM.

This enables context-aware conversations and improves response consistency.

---

# Prompting Techniques Used

The project combines multiple prompt engineering techniques.

## Role Prompting

The model is assigned the role of an AI programming mentor inspired by a selected educator.

This establishes consistent behavior throughout the conversation.

---

## Persona Prompting

Each mentor has unique behavioral instructions describing:

* Teaching philosophy
* Communication style
* Response structure
* Engineering mindset

This produces noticeably different teaching styles while remaining transparent that the assistant is an AI.

---

## Instruction Layering

Instructions are divided into multiple layers instead of being placed into one large prompt.

Layers include:

* Common rules
* Persona-specific rules
* Research observations
* Conversation context

This improves maintainability and clarity.

---

## Contextual Prompting

Previous conversation history is included with every request.

This enables the model to:

* Remember previous explanations
* Maintain continuity
* Avoid repeating information
* Provide follow-up answers naturally

---

## Reflection Prompting

Each persona ends with a silent self-check.

Before generating a response, the model is instructed to verify whether the answer matches the intended teaching style.

Examples include checking:

* Technical correctness
* Teaching quality
* Persona consistency
* Appropriate response structure

This improves consistency across longer conversations.

---

## Adaptive Prompting

The model is instructed to estimate whether the learner is:

* Beginner
* Intermediate
* Advanced

The explanation depth is then adjusted accordingly.

This prevents overwhelming beginners while still providing value to experienced developers.

---

# Design Decisions

Several design decisions were made during development.

## Modular Prompt Design

Instead of storing everything in one prompt, the project separates:

* Common behavior
* Persona behavior
* Research observations

This allows future personas to be added with minimal code changes.

---

## Research-Driven Personas

Personas are built from structured observations rather than copied transcripts.

This approach is more maintainable and avoids direct imitation.

---

## Separation of Concerns

Prompt generation is separated from:

* API communication
* Conversation memory
* Request handling

This keeps the codebase organized and easier to maintain.

---

# Benefits of the Approach

The selected prompt engineering strategy provides several advantages.

* Consistent persona behavior
* Easier maintenance
* Cleaner architecture
* Better context awareness
* Higher response quality
* Easier addition of future personas
* Improved transparency during evaluation

---

# Conclusion

Rather than relying on a single static prompt, this project uses a modular prompt engineering pipeline.

By combining common rules, persona-specific behavior, structured research, and conversation history, the chatbot delivers responses that are context-aware, technically accurate, and aligned with the selected mentor's educational style.
