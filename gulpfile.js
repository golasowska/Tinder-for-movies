var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function() {
   return gulp.src('sass/style.scss')
   .pipe(sourcemaps.init())
   .pipe(sass({errLogToConsole:true}))
   .pipe(prefix("last 3 version", "> 1%", "ie 8", "ie 7"))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('css')) // --> gdzie laduja
})
gulp.task('watch', function(){
   gulp.watch('scss/**/*.scss', ['sass']);
})