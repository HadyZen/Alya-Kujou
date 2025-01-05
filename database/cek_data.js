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
    const sql = `SELECT * FROM users WHERE json_extract(data, '$.id') = ?`;

    db.get(sql, [id], (err, row) => {
      if (err) {
        console.log(global.Alya.logo.error + 'Gagal mencari user:', err.message);
      } else if (row) {
        return row;
      } else {
        return 'gada';
      }
    });
  });
db.close((err) => { });
}

module.exports = { cdata };
