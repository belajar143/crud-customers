const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // kalau ada password, isi di sini
  database: 'crud_customers'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

module.exports = connection;
