var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var exec = require('child_process').exec;
var server = require( 'gulp-develop-server');
//var webpack = require('gulp-webpack');

var Paths = {
    routes_src:'routes/*.js',
    routes_dest:'build/routes',
    html_src:'views/**',
    js_src:'public/javascript/controller/**',
    react_src:'public/javascript/react/*.js',
    react_dest:'public/javascript/babel'
};

gulp.task('routes',function(){
    gulp.src(Paths.routes_src)
        .pipe(uglify())
        .pipe(gulp.dest(Paths.routes_dest));
});

gulp.task('babel_JSX',function(){
    gulp.src(Paths.react_src)
        .pipe(babel())
        .pipe(gulp.dest(Paths.react_dest));
});

/*
gulp.task('webpack',function(){
    gulp.src(Paths.webpack_src)
        .pipe(webpack())
        .pipe(gulp.dest(Paths.webpack_dest));
});*/


gulp.task('webpack', function (cb) {
    exec('webpack', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
/*
 gulp.task('start', function (cb) {
 exec('npm start', function (err, stdout, stderr) {
 console.log(stdout);
 console.log(stderr);
 cb(err);
 });
 });
 gulp.task('stop', function (cb) {
 console.log('asda');
 exec('ps aux | grep \'\snode\s\' | awk \'{print $2}\'', function (err, stdout, stderr) {
 console.log(stdout);
 console.log(stderr);
 cb(err);});
 });
 gulp.task('restart', function (cb) {
 console.log('restart!');
 });*/

// run server
gulp.task( 'server:start', function() {
    server.listen( { path: './app.js' } );
});

// run server
gulp.task( 'server.restart', function() {
    server.restart();
});

gulp.task('watch',function(){
    gulp.watch([Paths.routes_src,Paths.html_src,Paths.js_src,Paths.react_src],['routes','babel_JSX','webpack','server.restart']);
});

gulp.task('default', ['routes','babel_JSX','webpack','server:start','watch']);