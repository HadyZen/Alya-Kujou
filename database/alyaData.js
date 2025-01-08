const fs = require('fs');
const path = require('path');

// Read the JSON file and parse it correctly.
let database = {};
const filePath = path.join(__dirname, 'alyaData.json');

try {
    database = JSON.parse(fs.readFileSync(filePath, 'utf8'));
} catch (err) {
    database = {}; // Initialize empty database if file is missing or invalid.
}

function addData(id, nama, yen) {
    if (!database[id]) {  // Check if user ID doesn't already exist
        database[id].push({ nama, yen }); // Store new user data
        console.log(global.Alya.logo.data + 'Berhasil menambah pengguna baru.');
        saveData();  // Save to file
    } else {
        console.log(global.Alya.logo.error + 'Pengguna dengan ID ini sudah ada.');
    }
}

function saveData() {
  fs.writeFile(filePath, JSON.stringify(database, null, 2), (err) => {
    if (err) {
        console.log(global.Alya.logo.error + 'Gagal menyimpan data: ', err);
    } else {
        console.log(global.Alya.logo.data + 'Data berhasil disimpan.');
    }
  });
}

function getData(id) {
    // Return the data for the given ID or null if not found
    return database[id] || null;
}

function setData(id, jenis, alya) {
    if (database[id]) {
        if (jenis === 'nama' || jenis === 'yen') {
            database[id][jenis] = alya; // Update the user's data
            saveData();  // Save changes
            console.log(global.Alya.logo.data + 'Data berhasil diperbarui.');
        } else {
            console.log(global.Alya.logo.error + 'Jenis data tidak valid.');
        }
    } else {
        console.log(global.Alya.logo.error + 'Pengguna tidak ditemukan.');
    }
}

module.exports = { addData, getData, setData };
