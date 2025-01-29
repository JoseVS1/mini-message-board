const db = require("../db/queries");

const getIndexPage = async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", {title: "Mini Messageboard", messages});
}

const getNewMessagePage = (req, res) => {
    res.render("form", {title: "New Message"})
}

const createMessage = async (req, res) => {
    const {text, user} = req.body;

    if (text && user) {
        const currentDate = new Date();

        const message = {
            text,
            user,
            added: currentDate.getFullYear() + '-' +
            String(currentDate.getMonth() + 1).padStart(2, '0') + '-' +
            String(currentDate.getDate()).padStart(2, '0') + ' ' +
            String(currentDate.getHours()).padStart(2, '0') + ':' +
            String(currentDate.getMinutes()).padStart(2, '0') + ':' +
            String(currentDate.getSeconds()).padStart(2, '0')
        };

        await db.insertMessage(message);
    
        res.redirect("/");
    } else {
        res.redirect("/new");
    }
}

module.exports = {
    getIndexPage,
    getNewMessagePage,
    createMessage
}