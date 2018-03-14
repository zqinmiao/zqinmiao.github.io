---
title: polyfil和shim
tags: 概念
categories: 笔记
abbrlink: 6682
date: 2017-03-01 11:41:57
update:
comments:
permalink:
---

polyfill 是 shim 的一种。

shim 是将不同 api 封装成一种，比如 jQuery 的 $.ajax 封装了 XMLHttpRequest 和 IE 用 ActiveXObject 方式创建 xhr 对象；

polyfill 特指 shim 成的 api 是遵循标准的，其典型做法是在IE浏览器中增加 window.XMLHttpRequest ，内部实现使用 ActiveXObject。

在实际中为了方便做对比，会特指 shim 的 api 不是遵循标准的，而是自己设计的。


[原文链接](https://www.zhihu.com/question/22129715/answer/21242550)