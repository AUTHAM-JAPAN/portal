var gulp         = require('gulp');
var runSequence  = require('run-sequence');
var browserSync  = require('browser-sync').create();
var typescript = require('gulp-typescript');
var less = require('gulp-less');

gulp.task('browser-sync', function() {
    browserSync.init({
        //proxy: "http://153.120.38.213",
		proxy: "localhost",
        //host: "dev.autham.net",
        open: false
    }); 

    //gulp.watch(["offerbox/**/*","!offerbox/public_html/fuel/app/logs/**/*"]).on('change', browserSync.reload);
    gulp.watch(["../app/**/*.php", "../resources/**/*.php"]).on('change', browserSync.reload);
});

gulp.task('typescript-compile', function(){
	// 対象となるファイルを全部指定
	gulp.src(['../resources/assets/ts/**/*.ts'])
		// 1対1でコンパイル
		.pipe(typescript({ target: "ES5", removeComments: true, noExternalResolve: true }))
		// jsプロパティを参照
		.js
		.pipe(gulp.dest('../public/assets/js/'));

	gulp.watch(['../resources/assets/ts/**/*.ts'], ['typescript-compile']);
});

gulp.task('less-compile', function () {
	gulp.src('../resources/assets/less/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('../public/assets/css/'));

	gulp.watch(['../resources/assets/less/**/*.less'], ['less-compile']);
});

gulp.task('default', function(callback) {
    return runSequence(
        //'browser-sync',
		'typescript-compile',
		'less-compile',
        callback
    );  
});

