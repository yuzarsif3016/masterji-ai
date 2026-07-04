// =======================================
// ELEMENTS
// =======================================

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const personaCards = document.querySelectorAll(".persona-card");

// =======================================
// SESSION
// =======================================

const sessionId = crypto.randomUUID();

// =======================================
// CURRENT PERSONA
// =======================================

let currentPersona = "hitesh";

// =======================================
// PERSONA SWITCHING
// =======================================

personaCards.forEach(card => {

    card.addEventListener("click", () => {

        personaCards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");

        currentPersona = card.dataset.persona;

        console.log("Current Persona:", currentPersona);

    });

});

// =======================================
// ADD MESSAGE
// =======================================

function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.className = `message ${sender}`;

    const bubble = document.createElement("div");

    bubble.className = "bubble";

    if (sender === "ai") {

        bubble.innerHTML = marked.parse(message);

    } else {

        bubble.textContent = message;

    }

    messageDiv.appendChild(bubble);

    chatBox.appendChild(messageDiv);

    // Syntax Highlighting
    document.querySelectorAll("pre code").forEach(block => {

        hljs.highlightElement(block);

    });

    // Copy Button
    addCopyButtons();

    scrollToBottom();

}

// =======================================
// COPY BUTTON
// =======================================

function addCopyButtons() {

    document.querySelectorAll("pre").forEach(pre => {

        // Don't create twice
        if (pre.querySelector(".copy-btn")) return;

        const button = document.createElement("button");

        button.className = "copy-btn";

        button.innerHTML = "📋 Copy";

        button.addEventListener("click", async () => {

            const code = pre.querySelector("code").innerText;

            await navigator.clipboard.writeText(code);

            button.innerHTML = "✅ Copied!";

            setTimeout(() => {

                button.innerHTML = "📋 Copy";

            }, 1500);

        });

        pre.style.position = "relative";

        pre.appendChild(button);

    });

}

// =======================================
// TYPING INDICATOR
// =======================================

function showTyping() {

    if (document.getElementById("typing")) return;

    const typing = document.createElement("div");

    typing.className = "message ai";

    typing.id = "typing";

    typing.innerHTML = `
        <div class="bubble">
            🤖 Thinking...
        </div>
    `;

    chatBox.appendChild(typing);

    scrollToBottom();

}

function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {

        typing.remove();

    }

}

// =======================================
// AUTO SCROLL
// =======================================

function scrollToBottom() {

    chatBox.scrollTop = chatBox.scrollHeight;

}

// =======================================
// OPENAI CALL
// =======================================

async function getAIResponse(message) {

    showTyping();

    sendBtn.disabled = true;

    input.disabled = true;

    try {

        const response = await fetch("http://localhost:3000/api/chat", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                message,

                persona: currentPersona,

                sessionId

            })

        });

        if (!response.ok) {

            throw new Error("Server Error");

        }

        const data = await response.json();

        removeTyping();

        addMessage(data.reply, "ai");

    }

    catch (error) {

        removeTyping();

        addMessage("❌ Unable to connect to the AI server.", "ai");

        console.error(error);

    }

    finally {

        sendBtn.disabled = false;

        input.disabled = false;

        input.focus();

    }

}

// =======================================
// SEND MESSAGE
// =======================================

function sendMessage() {

    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user");

    input.value = "";

    getAIResponse(message);

}

// =======================================
// EVENTS
// =======================================

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", e => {

    if (e.key === "Enter" && !e.shiftKey) {

        e.preventDefault();

        sendMessage();

    }

});