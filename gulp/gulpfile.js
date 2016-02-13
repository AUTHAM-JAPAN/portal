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
	gulp.src([
			'../resources/assets/ts/**/*.{ts,tsx}'
		])
		// 1対1でコンパイル
		.pipe(typescript({ target: "ES5", removeComments: true, noExternalResolve: true, jsx:"react" }))
		// jsプロパティを参照
		.js
		.pipe(gulp.dest('../public/assets/js/'));

	gulp.watch(['../resources/assets/ts/**/*.{ts,tsx}'], ['typescript-compile']);
});

gulp.task('less-compile', function () {
	gulp.src([
			'../resources/assets/less/**/*.less',
			'!../resources/assets/less/buttons.less',
			'!../resources/assets/less/invoice.less',
			'!../resources/assets/less/mobile-nav.less',
			'!../resources/assets/less/shortcodes.less',
			'!../resources/assets/less/theme.less',
			'!../resources/assets/less/variables/*.less',
			'!../resources/assets/less/bootstrap/a*.less',
			'!../resources/assets/less/bootstrap/badges.less',
			'!../resources/assets/less/bootstrap/breadcrumbs.less',
			'!../resources/assets/less/bootstrap/button*.less',
			'!../resources/assets/less/bootstrap/c*.less',
			'!../resources/assets/less/bootstrap/d*.less',
			'!../resources/assets/less/bootstrap/f*.less',
			'!../resources/assets/less/bootstrap/g*.less',
			'!../resources/assets/less/bootstrap/i*.less',
			'!../resources/assets/less/bootstrap/j*.less',
			'!../resources/assets/less/bootstrap/l*.less',
			'!../resources/assets/less/bootstrap/m*.less',
			'!../resources/assets/less/bootstrap/n*.less',
			'!../resources/assets/less/bootstrap/p*.less',
			'!../resources/assets/less/bootstrap/r*.less',
			'!../resources/assets/less/bootstrap/s*.less',
			'!../resources/assets/less/bootstrap/t*.less',
			'!../resources/assets/less/bootstrap/u*.less',
			'!../resources/assets/less/bootstrap/v*.less',
			'!../resources/assets/less/bootstrap/w*.less',
			'!../resources/assets/less/font-awesome/a*.less',
			'!../resources/assets/less/font-awesome/b*.less',
			'!../resources/assets/less/font-awesome/c*.less',
			'!../resources/assets/less/font-awesome/fixed-width.less',
			'!../resources/assets/less/font-awesome/i*.less',
			'!../resources/assets/less/font-awesome/l*.less',
			'!../resources/assets/less/font-awesome/m*.less',
			'!../resources/assets/less/font-awesome/p*.less',
			'!../resources/assets/less/font-awesome/r*.less',
			'!../resources/assets/less/font-awesome/s*.less',
			'!../resources/assets/less/font-awesome/v*.less'
		])
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

