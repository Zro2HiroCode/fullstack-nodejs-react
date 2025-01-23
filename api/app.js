var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

var app = express();
app.use(cors());

var pool = mysql.createPool({
    connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'travel'
});

app.get('/attractions', function (req, res, next) {
  pool.query('SELECT * FROM attractions', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333');
});

