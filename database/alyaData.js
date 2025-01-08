const fs = require('fs');
const path = require('path');

// Lokasi file JSON untuk menyimpan data
const dbPath = path.join(__dirname, 'db.json');

// Fungsi untuk mendapatkan data dari db.json
function getData() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if (err) {
                return reject('Gagal membaca file database');
            }
            try {
                resolve(JSON.parse(data));
            } catch (parseError) {
                reject('Gagal parsing data');
            }
        });
    });
}

// Fungsi untuk menambah data ke db.json
function addData(id, nama, yen) {
    return getData()
        .then((db) => {
            // Menambahkan data baru ke dalam objek db
            db[id] = { nama, yen };
            return new Promise((resolve, reject) => {
                fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
                    if (err) {
                        return reject('Gagal menulis ke file database');
                    }
                    resolve('Data berhasil ditambahkan');
                });
            });
        })
        .catch((err) => {
            // Jika file db.json tidak ada, buat file baru dengan data baru
            const db = { [id]: { nama, yen } };
            return new Promise((resolve, reject) => {
                fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
                    if (err) {
                        return reject('Gagal menulis ke file database');
                    }
                    resolve('Data berhasil ditambahkan');
                });
            });
        });
} 

module.exports = { addData, getData };
