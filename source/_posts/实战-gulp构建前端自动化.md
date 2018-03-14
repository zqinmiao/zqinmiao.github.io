---
title: '[实战]gulp构建前端自动化'
tags: Gulp
categories: 工具
abbrlink: 596
date: 2017-09-12 11:38:32
update: 2017-10-30 00:00:00
comments:
permalink:
---
>需要给部门前端组写一个关于使用gulp的文档，所以就写了一个
<!--more-->

## 相关文档

[Gulp中文网](http://www.gulpjs.com.cn/) - 如何开始使用 gulp

[入门指南](http://www.gulpjs.com.cn/docs/getting-started/) - 学习 gulp 的输入和输出方式

[搜索 gulp 插件](https://gulpjs.com/plugins/)

[在 npm 查看所有插件](https://www.npmjs.com/browse/keyword/gulpplugin)

[Browsersync / 说明文档](http://www.browsersync.cn/docs/gulp/)

## 实战

[实战项目地址](https://github.com/zqinmiao/gulp-practice)

### package.json
```
{
  "name": "gulp-practice",
  "version": "0.1.0",
  "description": "A gulp practice project",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": ""
  },
  "keywords": [],
  "author": "Mark Zhang",
  "license": "MIT",
  "bugs": {
    "url": ""
  },
  "homepage": "",
  "devDependencies": {
    "babel-preset-env": "^1.6.0",
    "browser-sync": "^2.18.13",
    "gulp-babel": "^7.0.0",
    "gulp-ejs": "^3.0.1",
    "gulp-imagemin": "^3.3.0",
    "gulp-load-plugins": "^1.5.0",
    "gulp-rename": "^1.2.2",
    "gulp-rev": "^8.0.0",
    "gulp-rev-collector": "^1.2.2",
    "gulp-sourcemaps": "^2.6.1",
    "imagemin-pngquant": "^5.0.1"
  },
  "dependencies": {
    "babel-core": "^6.23.1",
    "babel-preset-es2015": "^6.22.0",
    "del": "^2.2.2",
    "gitment": "0.0.3",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^3.1.1",
    "gulp-clean-css": "^3.0.2",
    "gulp-concat": "^2.6.1",
    "gulp-less": "^3.3.0",
    "gulp-sequence": "^0.4.6",
    "gulp-uglify": "^3.0.0"
  }
}
```
### 项目目录
```
	gulp-practice
        │
        ├──dist						文件输出目录
        ├──rev						生成版本号文件夹
        ├──src						资源文件夹
        │	  ├──css				css文件夹
        │	  ├──images				图片
        │	  ├──js					js文件夹
        │	  ├──template			模版文件
        │	  ├──views				增加版本号后的模版文件
        ├──.babelrc					babel配置
        ├──.gitignore 				git忽略项
        ├──gulpfile.babel.js		gulp配置
        ├──package.json
        ├──README.md
```
### .babelrc
设置babel选项，以下选项设置为可使用es2015语法

```
{
  "presets": [
    "es2015"
  ]
}
```
### gulpfile.babel.js
正常情况下此文件的名称是```gulpfile.js```，由于我们使用了```babel```来实现在gulpfile.js里使用__es2015__语法，所以要将```gulpfile.js```改为```gulpfile.babel.js ```

```
//导入gulp
import gulp from 'gulp';
//压缩js
import uglify from 'gulp-uglify';
//源文件映射
import sourcemaps from 'gulp-sourcemaps';
//合并文件
import concat from 'gulp-concat';
//处理less文件
import less from 'gulp-less';
//压缩图片
import imagemin from 'gulp-imagemin';
//压缩png
import pngquant from 'imagemin-pngquant';
//压缩css
import cleanCss from 'gulp-clean-css';
//增加css前缀
import autoprefixer from 'gulp-autoprefixer';
//删除文件
import del from 'del';
//任务执行队列
import sequence from 'gulp-sequence';
//重命名文件名称
import rename from 'gulp-rename';
//处理ejs文件
import ejs from 'gulp-ejs';
//生成版本号
import rev from 'gulp-rev';
//关联html中，引入资源的版本号
import revCollector from 'gulp-rev-collector';
//将es6语法编译成es5语法
import babel from 'gulp-babel'
//浏览器同步工具
import browserSync from 'browser-sync'

// 清理目录
gulp.task('clean', () => del(['./dist/*','./src/views/*'], {dot: true}));

//copy 复制文件
gulp.task('copy', () => gulp.src(['./src/js/lib/jquery.min.js'])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist/js'))
);

//image 压缩图片
gulp.task('image', () => gulp.src('./src/images/**/*')
    .pipe(imagemin({
        progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        optimizationLevel: 3, //类型：Number  默认：3  取值范围：0-7（优化等级）
        use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/images'))
)

//ejs文件输出为html
gulp.task('postejs', () => gulp.src(['./src/views/*.ejs'])
    .pipe(ejs({}, {}, {ext: '.html'}))
    .pipe(gulp.dest('./dist/'))
);

//css 处理less
gulp.task('postcss', function () {
    return gulp.src('./src/css/style.less')
        .pipe(less())
        .pipe(autoprefixer({browsers: [
            'ie >= 9',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 2.3',
            'bb >= 10'
        ]}))
        .pipe(cleanCss())
        .pipe(rev())
        .pipe(gulp.dest('./dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/css'))
});

//uglifyjs 压缩js
gulp.task('uglifyjs', () => gulp.src('./src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(rev())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/js'))
);

//静态资源版本控制
gulp.task('rev',() =>gulp.src(['rev/**/*.json','./src/templates/**/*.ejs'])
    .pipe(revCollector({
        replaceReved:true
    }))
    .pipe(gulp.dest('./src/views'))
)

/*
* 执行watch
* */
gulp.task('execEjs',(cb) => sequence('rev','postejs',cb))
gulp.task('execCss',(cb) => sequence('postcss','execEjs',cb))
gulp.task('execJs',(cb) => sequence('uglifyjs','execEjs',cb))

// watch 监控
gulp.task('watch', () => {
    browserSync.init({
        server: "./dist"
    });
    gulp.watch('./src/templates/**/*.ejs',['execEjs']);
    gulp.watch('./src/css/**/*.less',['execCss']);
    gulp.watch('./src/js/*.js',['execJs']);
    gulp.watch('./src/images/**/*',['image']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

//build
gulp.task('build', (cb) => sequence('copy', 'image', 'postcss', 'uglifyjs','rev','postejs', cb));

//default
gulp.task('default', (cb) => sequence('clean', 'build', cb));

//dev
gulp.task('dev', ['build', 'watch'], (cb) => (cb));

```

### 执行
```
$ cd gulp-practice
$ npm install
$ gulp dev		开发模式
或者
$ gulp			build模式
```
