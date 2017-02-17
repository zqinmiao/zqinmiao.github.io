import gulp from 'gulp';
import less from 'gulp-less';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import del from 'del';
import sequence from 'gulp-sequence';

// 清理目录
gulp.task('clean', () => del(["./source/css"], {dot: true}));

//处理less
gulp.task('less', ()=>gulp.src('./src/less/style.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('./source/css'))
);

gulp.task('watch',()=>gulp.watch('./src/less/**/*.less', ['less']));

gulp.task('default', (cb)=>sequence('clean','less',cb));

gulp.task('dev',['less','watch'],(cb)=>(cb));