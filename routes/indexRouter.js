const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getIndexPage);

indexRouter.get("/new", indexController.getNewMessagePage);

indexRouter.post("/new", indexController.createMessage);

module.exports = indexRouter;