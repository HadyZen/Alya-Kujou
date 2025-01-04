module.exports = {
  config: {
    nama: "admin",
    penulis: "Hady Zen",
    kuldown: 10,
    peran: 2,
    tutor: "<list/add/del>"
  },
  Alya: async function({ api, event, args }) {
    const fs = require('fs');
    const noah = JSON.parse(fs.readFileSync('alya.json', 'utf8'));

    switch (args[0]) {
      case 'list':
        api.sendMessage(noah.admin.join('\n'), event.threadID, event.messageID);
        break;
      case 'add':
        if (args.length < 2) return api.sendMessage('Masukkan nama admin!', event.threadID, event.messageID);
        noah.admin.push(args[1]);
        fs.writeFileSync('alya.json', JSON.stringify(noah, null, 2));
        api.sendMessage('Admin berhasil ditambahkan!', event.threadID, event.messageID);
        break;
      case 'del':
        if (args.length < 2) return api.sendMessage('Masukkan nama admin!', event.threadID, event.messageID);
        const index = noah.admin.indexOf(args[1]);
        if (index !== -1) {
          noah.admin.splice(index, 1);
          fs.writeFileSync('alya.json', JSON.stringify(noah, null, 2));
          api.sendMessage('Admin berhasil dihapus!', event.threadID, event.messageID);
        } else {
          api.sendMessage('Admin tidak ditemukan!', event.threadID, event.messageID);
        }
        break;
      default:
        api.sendMessage('Perintah tidak valid! Gunakan <list/add/del>', event.threadID, event.messageID);
    }
  }
};
