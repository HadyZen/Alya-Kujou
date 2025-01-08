const fs = require('fs');
const path = require('path');
let database = {};

function addData(id, nama, yen) {
    if (!database[id]) {
        database[id] = { nama: nama, yen: yen };
        console.log(global.Alya.logo.data + 'Berhasil menambah pengguna baru.');
    }
    hady();
}

function hady() {
  fs.writeFile(path.join(__dirname, 'alyaData.json'), JSON.stringify(database, null, 2), (err) => { });
}

function getData(id) {
    if (database[id]) {
        return database[id];
    } else {
        return null;
    }
}

function setData(id, jenis, alya) {
    if (database[id]) {
        if (jenis === 'nama' || jenis === 'yen') {
            database[id][jenis] = alya;
            hady();
        } else {
            console.log(global.Alya.logo.error + 'Gagal mengganti data pengguna');
        }
    } 
}

module.exports = { addData, getData, setData };
