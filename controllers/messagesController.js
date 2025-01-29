const db = require("../db/queries");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessageById = asyncHandler(async (req, res) => {
    const {id} = req.params;

    const message = await db.getMessageById(Number(id));
    console.log(message)

    if (!message) {
        throw new CustomNotFoundError("Message not found");
    }

    res.render("details", {title: "Message Details", message});
})

module.exports = {
    getMessageById,
}