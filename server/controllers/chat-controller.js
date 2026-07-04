const {
    getOpenAIResponse
} = require("../services/openai-service");

async function chatController(req, res) {

    try {

        const {

            message,

            persona,

            sessionId

        } = req.body;

        const reply = await getOpenAIResponse(

            message,

            persona,

            sessionId

        );

        res.json({

            success: true,

            reply

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            reply: "Something went wrong."

        });

    }

}

module.exports = {

    chatController

};