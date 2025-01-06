module.exports = {
  config: { 
    nama: "cdata", 
    penulis: "Hady Zen", 
    kuldown: 4,
    peran: 0,
    tutor: ""
  }, 
  Alya: async function ({ api, event, cdata }) {
    api.sendMessage(cdata(), event.threadID, event.messageID)
  }
};
