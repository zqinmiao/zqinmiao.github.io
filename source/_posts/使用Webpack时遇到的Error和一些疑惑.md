---
title: 使用Webpack时遇到的Error和一些疑惑
date: 2017-07-06 22:07:29
update:
comments:
tags: Webpack
categories: 工具
permalink:
---
>在用Webpack时遇到了一些问题，和一些概念的疑惑，持续更新...
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

