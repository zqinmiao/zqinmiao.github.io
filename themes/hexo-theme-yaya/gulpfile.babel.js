import gulp from 'gulp';
import less from 'gulp-less';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('less', ()=>gulp.src('./src/less/style.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('./source/css'))
);

gulp.task('default', ['less'], ()=>gulp.watch('./src/less/**/*.less', ['less']));