const {messages} = require("../messages");

const getIndexPage = (req, res) => {
    res.render("index", {title: "Mini Messageboard", messages});
}

const getNewMessagePage = (req, res) => {
    res.render("form", {title: "New Message"})
}

const createMessage = (req, res) => {
    const {text, user} = req.body;

    if (text && user) {
        messages.push({
            id: messages.length + 1,
            text,
            user,
            added: new Date().toLocaleString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              })
        });
    
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