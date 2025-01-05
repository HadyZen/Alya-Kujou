const sqlite = require('sqlite3').verbose();

async function cdata(id) {
const db = new sqlite.Database('/database/alya.db', (err) => {
  if (err) {
    console.error('Gagal terhubung ke database: ', err.message);
  } else {
    console.log('Berhasil terhubung ke database.');
  }
});

db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
  if (err) {
    console.error('Gagal menarik data:', err.message);
  } else {
    if (row) {
      const hadi = JSON.parse(row.data);
      return hadi;
    } else {
      return 'Pengguna tidak ditemukan.';
    }
  }
});

db.close((err) => { });
}
