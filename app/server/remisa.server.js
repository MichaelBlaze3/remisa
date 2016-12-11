var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mysql = require('mysql');


// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "remisa_cms"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');

});

// con.end(function(err) {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });

// Add headers
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/')    
//   }, 
//   filename: function (req, file, cb) {
//     var datetimestamp = Date.now();

//     cb(null, file.fieldname + '_' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
//   }
// });

// var upload = multer({
//   storage: storage
// }).single('file');

// var _img_data = {};

// app.post('/upload', function (req, res) { 

//   upload(req, res, function (err) {
//     if (err) {
//       res.json({ error_code: 1, err_desc: err });

//       return;
//     }
//     res.json({ error_code: 0, err_desc: null });

//     console.log(req.file);     
//     if (req.file.filename != null || !req.file.filename){
//       db_set(req.file);
//     }

//   });

// });

// var db_set = function (fileObject) {

//   _img_data.url = fileObject.filename;
//   _img_data.name = fileObject.originalname;
//   console.log(_img_data);

//   con.query('INSERT INTO images SET ?', _img_data, function (err, res) {
//         if (err) {
//             console.log(err);
//             return err;
//         }
//         else {
//             console.log("Last insert ID: ", res);
//             return "ok";
//         }
//   }); 

// }

app.post('/get_users', function (req, res) {
  con.query('SELECT * FROM tbl_users WHERE _fk_id_roles != 3', function (err, rows) {
    if (err) {
      console.log("Error: " + err);
      return err;
    }
    else {
        console.log('Data received from Db:\n');
        console.log(rows);
    }
    res.send(rows);
  });
});

app.post('/delete', function (req, res) {
    
  con.query('DELETE FROM images WHERE id = ?', [req.body.id], function (err, removed) {
    if (err) {
      console.log("Error: " + err);
      return err;
    }
    else {
        console.log('Removed from Db:\n');
        console.log(removed);
        res.send(removed);
    }

  });
});




app.listen(3000, function () {
    console.log("Up and running on 3000"); 
});