import gulp from 'gulp';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import less from 'gulp-less';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import del from 'del';
import sequence from 'gulp-sequence';

// 清理目录
gulp.task('clean', () => del(["./source/css/style.css"], {dot: true}));

//处理less
gulp.task('less', ()=>gulp.src('./src/less/style.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('./source/css/'))
);

//处理js
gulp.task('js', ()=>gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./source/js'))
);

gulp.task('watch',()=>{
    gulp.watch('./src/less/**/*.less', ['less']);
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', (cb)=>sequence('clean','less','js',cb));

gulp.task('dev',['less','js','watch'],(cb)=>(cb));