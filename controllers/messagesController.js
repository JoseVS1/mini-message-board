const messages = require("../messages");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessageById = asyncHandler(async (req, res) => {
    const {id} = req.params;

    const message = await messages.getMessageById(Number(id));

    if (!message) {
        throw new CustomNotFoundError("Message not found");
    }

    res.render("details", {title: "Message Details", message});
})

module.exports = {
    getMessageById,
}