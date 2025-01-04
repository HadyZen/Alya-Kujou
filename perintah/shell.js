const { exec } = require("child_process");

module.exports = {
  config: {
    nama: "shell", 
    kuldown: 6,
    peran: 2,
    penulis: "Hady Zen", 
    tutor: "<kode>"
  },

Alya: async function ({ api, event, args }) {
    exec(args.join(" "), (error, stdout, stderr) => {
      let hadi = "";
      if (error) {
        result = error.message;
      }
      if (stdout) {
        hadi = stdout;
      }
      if (stderr) {
        hadi = stderr;
      }
      api.sendMessage(hadi, event.threadID, event.messageID);
    });
  },
};
