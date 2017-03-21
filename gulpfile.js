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
    webpack_config:'./webpack.config.js',
    gulp_config:'./gulpfile.js',
    /*react_src:'public/javascript/react/*.js',
    react_dest:'public/javascript/babel',
    reducers_src:'public/javascript/react/reducers/*.js',
    reducers_dest:'public/javascript/babel/reducers',
    containers_src:'public/javascript/react/containers/*.js',
    containers_dest:'public/javascript/babel/containers',
    component_src:'public/javascript/react/component/*.js',
    component_dest:'public/javascript/babel/component',*/
    react_src:'public/javascript/react/**/*.js',
    react_dest:'public/javascript/babel',
    database_api_src:'databases/*.js'
};

gulp.task('routes',function(){
    gulp.src(Paths.routes_src)
        .pipe(uglify())
        .pipe(gulp.dest(Paths.routes_dest));
});

/*
gulp.task('babel_JSX',function(){
    gulp.src(Paths.react_src)
        .pipe(babel())
        .pipe(gulp.dest(Paths.react_dest));
});

gulp.task('babel_reducers',function(){
    gulp.src(Paths.reducers_src)
        .pipe(babel())
        .pipe(gulp.dest(Paths.reducers_dest));
});

gulp.task('babel_containers',function(){
    gulp.src(Paths.containers_src)
        .pipe(babel())
        .pipe(gulp.dest(Paths.containers_dest));
});

gulp.task('babel_component',function(){
    gulp.src(Paths.component_src)
        .pipe(babel())
        .pipe(gulp.dest(Paths.component_dest));
});*/

gulp.task('babel',function(){
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
    gulp.watch(
        [Paths.routes_src,Paths.html_src,Paths.react_src,Paths.database_api_src,Paths.webpack_config,Paths.gulp_config],
        ['routes','babel','webpack','server.restart']
    );
});

gulp.task('default', ['routes','babel','webpack','server:start','watch']);