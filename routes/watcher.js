var chokidar = require('chokidar');
var arr = require('./arr');


// module.exports = function(req,res){
// 	var arr= [];
// 	console.log(req.body)
// 	var watcher = chokidar.watch(req.body.folder, {
// 	  ignored: /(^\..+)|(.+[\/\\]\..+)|(.+?\_modules$)/,
// 	  persistent: true
// 	});
//
// 	// Something to use when events are received.
// 	var log = console.log.bind(console);
// 	// Add event listeners.
// 	watcher.unwatch('./node_modules');
// 	watcher
// 	  .on('add', path => log(`File ${path} has been added`))
// 	  .on('change', path => log(`File ${path} has been changed`))
// 	  .on('unlink', path => log(`File ${path} has been removed`));
//
// };



module.exports = function(req,res){
	var watcher = chokidar.watch(req.body.folder, {
	  ignored: /(^\..+)|(.+[\/\\]\..+)|(.+?\_modules$)/,
	  persistent: true,
	});

	// Something to use when events are received.
	var log = console.log.bind(console);
	// Add event listeners.
		watcher.on('change',path => {
			log(`File ${path} has been changed`)
			if(arr.indexOf(path) == -1){
				 arr.push(`${path} - 修改`)
			}
		 })
}
