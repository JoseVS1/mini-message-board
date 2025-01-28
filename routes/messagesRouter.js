const {Router} = require("express");
const messagesController = require("../controllers/messagesController");

const messagesRouter = Router();

messagesRouter.get("/:id", messagesController.getMessageById);

module.exports = messagesRouter;