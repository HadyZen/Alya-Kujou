const sqlite = require('sqlite3').verbose();

async function cdata() {
const db = new sqlite.Database('./alya.db', (err) => {
  if (err) {
    console.error('Gagal terhubung ke database: ', err.message);
  } else {
    console.log('Berhasil terhubung ke database.');
  }
});

db.all("SELECT * FROM users", [], (err, rows) => {
  if (err) {
    throw err;
  }

  rows.forEach((row) => {
    try {
      return JSON.parse(row.data); 
    } catch (e) {
      return row.data;
    }
  });
});
  
db.close((err) => { });
}

module.exports = { cdata };
