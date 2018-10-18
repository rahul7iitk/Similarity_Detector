var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var PythonShell = require('python-shell');
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.txt')
  }
}) 
  
var upload = multer({ storage: storage }).array('files',2)

app.post('/upload',  function (req, res) {
   //res.send('Files received'); 
   upload(req,res,function(err) {
        
        if(err) {
            return res.end("Error uploading file.");
        }
        
       const { spawn } = require('child_process');
       const ls = spawn('./script.py',[req.files[0].path,req.files[1].path]);
       
       ls.stdout.on('data', (data) => {
       res.json({'results':(data.toString()).replace(/^\s+|\s+$/g, '')});
       console.log('stdout:'+data);
        });

       ls.stderr.on('data', (data) => {
	   console.log('stderr:'+data);
		});

       //res.json({'results':result})

    });
});



app.listen(3000);
