const {

    addMessage,

    getConversation

} = require("./services/memory-service");

addMessage(

    "demo",

    "user",

    "Hello"

);

addMessage(

    "demo",

    "assistant",

    "Hi!"

);

console.log(

    getConversation("demo")

);