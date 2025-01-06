const sqlite = require('sqlite3').verbose();

async function cdata(id) {
const db = new sqlite.Database('./alya.db', (err) => {
  if (err) {
    console.error('Gagal terhubung ke database: ', err.message);
  } else {
    console.log('Berhasil terhubung ke database.');
  }
});

db.serialize(() => {
    db.all('SELECT * FROM users', (err, rows) => {
      if (err) {
        console.log(global.Alya.logo.error + 'Gagal mengambil semua data:', err.message);
      } else {
        if (rows.length > 0) {
          rows.forEach(row => {
            return JSON.parse(row.data);
          });
      } else {
        return 'gada';
      }
    });
  });
db.close((err) => { });
}

module.exports = { cdata };
