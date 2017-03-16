var chokidar = require('chokidar')
var arr = require('./arr');
var exec = require('child_process').exec;

exports.main = function(req,res){
	//arr.splice(0,arr.length);
	arr.length = 0;
	res.render('index')
};

exports.testEnv = function(req,res){
	var file = req.body.file.replace(/\\/g, "/");

	console.log(`文件：${file}`)
	exec('rm -rf 33/*',(error,stdout,stderr)=>{
		if (error) {
  	    console.error(`exec error: ${error}`);
  	    return;
  	  }
  	  console.log(`stdout: ${stdout}`);
  	  console.log(`stderr: ${stderr}`);
	})
	exec('cp '+file+' 33',(error,stdout,stderr)=>{
		if (error) {
  	    console.error(`exec error: ${error}`);
  	    return;
  	  }
  	  console.log(`stdout: ${stdout}`);
  	  console.log(`stderr: ${stderr}`);
	})
	exec('gulp test', (error, stdout, stderr) => {
	  if (error) {
	    console.error(`exec error: ${error}`);
		res.send('fail')
	    return;
	  }
	  res.send('success');
	  console.log(`stdout: ${stdout}`);
	  console.log(`stderr: ${stderr}`);
	});
}
