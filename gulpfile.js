var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();
var deporder      = require('gulp-deporder');
var concat        = require('gulp-concat');
var stripdebug    = require('gulp-strip-debug');
var uglify        = require('gulp-uglify');

gulp.task('browserSync',function (){
    browserSync.init({
        proxy:"http://localhost/testing",
    })
});

gulp.task('sass',function (){
    return gulp.src('assets/sass/**/*.scss')
        .pipe(sass)
        .pipe(gulp.dest('.'))
        .pipe(browserSync.reload({
            stream:true,
        }));
});


const js = {
    src         :  'assets/js/ajax-movie.js',
    build       :  'assets/js/',
    filename    : 'scripts.js'
};

gulp.task('js',['browserSync'],function(){

    return gulp.src(js.src)
        // .pipe(deporder())
        .pipe(concat(js.filename))
        // .pipe(stripdebug())
        .pipe(uglify())
        .pipe(gulp.dest(js.build))
        .pipe(browserSync.reload({ stream: true }));
});

//
// gulp.task('watch',['browserSync','sass'],function(){
//     gulp.watch('sass/**/*.scss',['sass']);
//     gulp.watch('sass/**/*.scss',browserSync.reload());
// })

gulp.task('build',['sass','js']);
