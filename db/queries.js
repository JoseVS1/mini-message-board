const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(message) {
    const {text, user, added} = message;
    await pool.query('INSERT INTO messages (text, "user", added) VALUES ($1, $2, $3)', [text, user, added]);
};

async function getMessageById(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0];
}

module.exports = {
    getAllMessages,
    insertMessage,
    getMessageById
}