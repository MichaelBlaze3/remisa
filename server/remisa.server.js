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
  database: "remisa"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection to DATABASE has been established');

});

// Add headers
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('../client'));  
app.use(bodyParser.json());


app.post('/get_users', function (req, res) {
  con.query('SELECT * FROM tbl_users', function (err, rows) {
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


app.post('/set_user', function (req, res) {
  console.log(req.body);
  // con.query('INSERT INTO tbl_users SET ?', ,function (err, rows) {
  //   if (err) {
  //     console.log("Error: " + err);
  //     return err;
  //   }
  //   else {
  //       console.log('Data received from Db:\n');
  //       console.log(rows);
  //   }
  //   res.send(rows);
  // });
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