var gulp = require('gulp');
var uglify = require('gulp-uglify');
var exec = require('child_process').exec;
var server = require( 'gulp-develop-server' );

var Paths = {
    routes_src:'routes/*.js',
    routes_dest:'build/routes',
    html_src:'views/**',
    js_src:'public/javascript/controller/**'


};

gulp.task('routes',function(){
    gulp.src(Paths.routes_src)
        .pipe(uglify())
        .pipe(gulp.dest(Paths.routes_dest));
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
    gulp.watch([Paths.routes_src,Paths.html_src,Paths.js_src],['routes','server.restart']);
});

gulp.task('default', ['routes','server:start','watch']);