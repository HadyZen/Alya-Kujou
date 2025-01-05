const sqlite = require('sqlite3').verbose();

async function bdata(id, nama, yen) { 
const db = new sqlite.Database('./alya.db', (err) => {
  if (err) {
    console.log(global.Alya.logo.error + 'Gagal terhubung ke database: ', err.message);
  } else {
    console.log(global.Alya.logo.info + 'Berhasil terhubung ke database.');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      data JSON
    )
  `);

  const stmt = db.prepare('INSERT INTO users (data) VALUES (?)');
  const data = JSON.stringify({ nama: nama, yen: yen });
  stmt.run(id, data, function(err) {
    if (err) {
      console.log(global.Alya.logo.error + 'Gagal membuat data:', err.message);
    } else {
      console.log(global.Alya.logo.info + 'Berhasil menambahkan user.');
    }
  });

  stmt.finalize();
});

db.close((err) => { });
};

module.exports = { bdata };
