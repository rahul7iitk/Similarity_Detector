var express = require('express');
var router = express.Router();

router.post('/',upload.single('file1'),function(req,res,next){
	res.json({'name':req.file.filename,'destination':req.file.destination,'path':req.file.path})
});

/*router.get('/:name/:age', function(req, res){
   //res.send('Your name is '+req.params.name+ ' and age is '+req.params.age);
   res.json({'name ':req.params.name,'age ':req.params.age})
});

router.use('/',function(req,res,next){
	console.log('Something is happening');
	next();
});

router.post('/',function(req,res){
       res.json({'city':req.body.city,'state':req.body.state})
});

router.get('/',function(req,res){
res.json({'roll number ':req.param('roll'),'branch ':req.param('branch')})
});

router.post('/', function(req, res){
   res.send('POST route on things.');
});
router.get('*',function(req,res){
res.send('Sorry URL not found')
}); */
//export this router to use in our index.js
module.exports = router;