const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");
const assetsPath = path.join(__dirname, "public");

const app = express();

app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/messages", messagesRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})