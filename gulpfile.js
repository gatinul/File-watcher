var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('public/src/*.js')
  	.pipe(named())
    .pipe(webpack({
		output:{
			filename:'[name].js'
		},
		resolve : {
		    alias: {
		        'vue$': 'vue/dist/vue.js'
		    }
		},
		watch :true,
		devtool:'source-map',
		module: {
	    	loaders: [
				{test: /\.(js|jsx)$/, query:{presets:['react','es2015']}, exclude: /node_modules/, loader: "babel-loader" },
		        {test: /\.css$/, loader: 'style!css'},
				{test: /\.(png|jpg)$/,loader: 'url-loader?limit=8192&name=images/[name].[ext]'},
	    	],
    	},

	}))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('test', function(){
	gulp.src('33/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('33/dist'));
})
