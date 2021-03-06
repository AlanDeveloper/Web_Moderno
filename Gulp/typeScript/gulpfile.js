const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(babel({
            minified: true,
            comments: false
        }))
        .on('error', function (err)  { console.log(err) })
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
});