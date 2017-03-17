var express= require("express");

var app = express();
var routes = require('./routes');
var ejs = require('ejs');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var path = require('path');
var chokidar = require('chokidar');
var watcher = require('./routes/watcher');
var sd = require('silly-datetime');


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var arr = require('./routes/arr')

app.use(serveStatic(path.join(__dirname,'public'))); //配置静态文件目录
app.set('views', path.join(__dirname, 'views'));//设置views路径
app.engine('.html', ejs.__express);
app.set('view engine', 'html');


app.post('/sure',jsonParser,function(req,res){
  console.log('1-'+req.body.folder)
  var watcher = chokidar.watch(req.body.folder, {
    ignored: /(^\..+)|(.+[\/\\]\..+)|(.+?\_modules$)/,
    persistent: true,
  });

  var log = console.log.bind(console);
    watcher.on('change',path => {
      var time=sd.format(new Date(), 'YYYY/MM/DD HH:mm');
      log(`File ${path} has been changed in ${time}`);
        var array = [];
        array.push(path);
        array.push(time);
        arr.push(array);
    })
})



app.get('/',routes.main);
app.get('/refresh',function(req,res){
	res.end(arr.join('-'))
})
// app.post('/211',function(req,res){
// 	console.log('testEnv')
// })
app.post('/211',jsonParser,routes.testEnv)


app.listen(3000,function(){
   console.log("server running...") ;
});
