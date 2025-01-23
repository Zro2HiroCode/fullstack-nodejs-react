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
// ทดสอบการเชื่อมต่อฐามข้อมูล โดยการเร๊ยกใช้งานฟังก์ชั่น connection.conmection(function(err)) เพื่อเชื่อมต่อฐานข้อมูล 
// หากไม่สามารถเชื่อมต่อกับฐานข้อมูลได้จะแสดงข้อผิดพลาดใน console.error และหยุดการทำงาน หากเชื่อมต่อสำเร็จ
// จะแสดงข้อความที่ระบุไว้ใน console.log 
// connection.connect(function(err) {
//   if (err) {
//     console.error('ข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล:', err.stack);
//     return;
//   }
//   console.log('เชื่อมต่อฐานข้อมูลสำเร็จ ด้วย ID ' + connection.threadId);
// });

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

app.listen(3329, function () {
  console.log('เซิร์ฟเวอร์เว็บที่เปิดใช้งาน CORS กำลังฟังอยู่ที่พอร์ต 3329');
});