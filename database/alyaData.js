const fs = require('fs');
const path = require('path');
const database = fs.readFileSync(JSON.parse(path.join(__dirname, 'alyaData.json')), 'utf8');
const kujou = {};

function addData(id, nama, yen) {
    if (!database[id]) {
        kujou.push({ nama: nama, yen: yen });
        console.log(global.Alya.logo.data + 'Berhasil menambah pengguna baru.');
    }
    hady();
}

function hady() {
  fs.writeFile(path.join(__dirname, 'alyaData.json'), JSON.stringify(kujou, null, 2), (err) => { });
}

function getData(id) {
    if (database[id]) {
        return JSON.parse(database[id]);
    } else {
        return null;
    }
}

function setData(id, jenis, alya) {
    if (database[id]) {
        if (jenis === 'nama' || jenis === 'yen') {
            kujou[id][jenis] = alya;
            hady();
        } else {
            console.log(global.Alya.logo.error + 'Gagal mengganti data pengguna');
        }
    } 
}

module.exports = { addData, getData, setData };
