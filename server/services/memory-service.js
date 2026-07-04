// Stores conversation history in memory.
// Key = sessionId
// Value = array of OpenAI messages

const conversations = new Map();

const MAX_MESSAGES = 10;

/**
 * Returns the conversation history for a session.
 */
function getConversation(sessionId) {

    return conversations.get(sessionId) || [];

}

/**
 * Adds a message to the conversation.
 */
function addMessage(sessionId, role, content) {

    const history = getConversation(sessionId);

    history.push({
        role,
        content
    });

    // Keep only the latest messages
    if (history.length > MAX_MESSAGES) {
        history.shift();
    }

    conversations.set(sessionId, history);

}

/**
 * Clears a conversation.
 */
function clearConversation(sessionId) {

    conversations.delete(sessionId);

}

module.exports = {

    getConversation,

    addMessage,

    clearConversation

};