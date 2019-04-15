"use strict";

var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var merge = require("merge-stream");
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');
var fs = require('fs');

var path = {
    distAssetCss :'assets/dist/css',
    distAssetJs :'assets/dist/js',
    assets : 'assets/'
};

//:::ASSETS
//::JS
var commonJSBundle = [
    path.assets + 'js/MochiKit.js'
]
gulp.task('asset:minify:js', function () {
    return gulp.src(commonJSBundle)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.distAssetJs));
});

//::CSS
var assetCssBundle = [
    path.assets + 'css/normalize.css',
    path.assets + 'css/skeleton.css',
    path.assets + 'css/custom.css',
    path.assets + 'css/github-prettify-theme.css'
]
gulp.task('asset:minify:css', function () {
    return gulp.src(assetCssBundle)
        .pipe(concat('app.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path.distAssetCss));
});

//:::BUILD
gulp.task('build', [
    'asset:minify:js',
    'asset:minify:css'
]);

