const OpenAI = require("openai");

const { buildPrompt } = require("../utils/prompt-builder");

const {
    getConversation,
    addMessage
} = require("./memory-service");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function getOpenAIResponse(
    message,
    persona,
    sessionId
) {

    const systemPrompt = buildPrompt(persona);

    const history = getConversation(sessionId);

    const messages = [

        {
            role: "system",
            content: systemPrompt
        },

        ...history,

        {
            role: "user",
            content: message
        }

    ];

    const response = await client.chat.completions.create({

        model: "gpt-4.1",

        temperature: 0.7,

        messages

    });

    const reply =
        response.choices[0].message.content;

    addMessage(
        sessionId,
        "user",
        message
    );

    addMessage(
        sessionId,
        "assistant",
        reply
    );

    return reply;

}

module.exports = {

    getOpenAIResponse

};