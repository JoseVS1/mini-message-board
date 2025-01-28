const messages = [
    {
      id: 1,  
      text: "Hi there!",
      user: "Armando",
      added: new Date().toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    },
    {
      id: 2,  
      text: "Hello World!",
      user: "Charles",
      added: new Date().toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    }
  ];

const getMessageById = async (id) => messages.find(msg => msg.id === id);

  module.exports = {
    messages,
    getMessageById
  };