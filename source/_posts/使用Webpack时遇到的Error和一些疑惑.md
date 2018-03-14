---
title: 使用Webpack时遇到的Error和一些疑惑
tags: Webpack
categories: 工具
abbrlink: 26270
date: 2017-07-06 22:07:29
update: 2017-09-13 00:00:00
comments:
permalink:
---
>在用Webpack时遇到了一些问题，和一些概念的疑惑，持续更新...
<!--more-->

__webpack版本：2.6.1__

# 使用[chunkhash]时，Error！
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

### [详解Webpack2的那些路径](http://www.qinshenxue.com/article/20170315092242.html)

### [搜罗一切webpack的好文章好工具](https://github.com/webpack-china/awesome-webpack-cn/blob/master/README.md)


