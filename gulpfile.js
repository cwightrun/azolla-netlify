// gulpfile.js
const gulp = require("gulp");
const sass = require("gulp-sass");

// Generate CSS from Sass
gulp.task('css', function() {
  return gulp.src('./_includes/assets/sass/**/**.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./_includes/assets/css/'));
});

// Watch folders for changes
gulp.task("watch", function() {
    gulp.watch('./_includes/assets/sass/**/*.scss', gulp.parallel('css'));
  });
  