---
title: 使用Webpack时遇到的Error和一些疑惑
date: 2017-07-06 22:07:29
update:
comments:
tags: Webpack
categories: 工具
permalink:
---
>在用Webpack时遇到了一些问题，和一些概念的疑惑，现总结一下。
<!--more-->

#### • 使用[chunkhash]时，Error！
在webpack.config.js文件中，在output选项里使用{filename:'[name].[chunkhash].js'}时，如：

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }

出现报错的情况：

    ERROR in chunk vendor [entry]
    [name].[chunkhash].js
    Cannot use [chunkhash] for chunk in '[name].[chunkhash].js' (use [hash] instead)

是因为生产环境build时不能启用HMR，将HMR插件关闭即可。

-------------

#### • 关于CommonsChunkPlugin插件的一些疑惑
官方文档解释说：CommonsChunkPlugin 插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。
做个测试：
先安装一个moment工具作为测试：

    npm install moment

在不使用CommonsChunkPlugin的情况下：

在入口文件index.js中

    import moment from 'moment';//导入模块moment
    console.log(moment().format());

在webpack.config.js中
```js
entry: {
    main:['index.js']
},
output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].js'
}
```
