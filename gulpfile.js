"use strict";

var gulp = require('gulp');
var jshint = require('gulp-jshint');
//var child_process = require('child_process');

var jsHintFiles = ['Source/**/*.js',
                   '!Source/Shaders/**',
                   '!Source/ThirdParty/**',
                   '!Source/Workers/cesiumWorkerBootstrapper.js',
                   'Apps/**/*.js',
                   'Apps/Sandcastle/gallery/*.html',
                   '!Apps/Sandcastle/ThirdParty/**',
                   'Specs/**/*.js',
                   'Tools/buildTasks/**/*.js'];

//Runs jsHint
gulp.task('jsHint', function() {
    return gulp.src(jsHintFiles)
        .pipe(jshint.extract('auto'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

//Runs jsHint automatically on file change.
gulp.task('jsHint-watch', function() {
    gulp.watch(jsHintFiles, ['jsHint']);
});