module.exports = {
    config: { 
        nama: "meme",
        penulis: "Hady Zen", 
        peran: 0,
        kuldown: 26,
        tutor: ""
    }, 
        
    Alya: async function ({ api, event }) {
        try {
            const axios = require('axios');
            const fs = require('fs');
            const path = require('path');
            const meme = await axios.get("https://raw.githubusercontent.com/HadyZen/hady-zen-api/refs/heads/main/meme.json");
            const itsuki = meme.data;
            const hadi = itsuki[Math.floor(Math.random() * itsuki.length)];
            const response = await axios.get(hadi, {
                responseType: 'arraybuffer'
            });

            const imageBuffer = Buffer.from(response.data, 'binary');
            const imagePath = path.join(__dirname, 'sampah', 'meme.png'); 

            fs.writeFileSync(imagePath, imageBuffer);

            api.sendMessage({ attachment: fs.createReadStream(imagePath) }, event.threadID, event.messageID);

        } catch (error) {
            api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
        }
    }
};
