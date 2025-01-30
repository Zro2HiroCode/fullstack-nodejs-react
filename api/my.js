var express = require('express')
var cors = require('cors')
var mysql = require('mysql')

var app = express()
app.use(cors())

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});


app.get('/recipes', function (req, res, next) {
  connection.query('SELECT * FROM recipes', function (error, results, fields) {
    if (error) {
      console.error('ข้อผิดพลาดในการดำเนินการคิวรี:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

app.listen(3330, function () {
  console.log('เซิร์ฟเวอร์เว็บที่เปิดใช้งาน CORS กำลังฟังอยู่ที่พอร์ต 3330');
});