---
title: mac下webstorm卡顿的解决方法
date: 2017-03-12 10:27:10
update:
comments:
tags: mac
categories: 工具
permalink:
---
>mac pro上用webstorm出现卡顿的现象，上下滑动代码都卡，这种情况一般是因为webstrom设的内存较小导致的
<!--more-->

## 解决办法：

![Alt 图片](/2017/03/mac下webstorm卡顿的解决方法/1.jpeg)

点击并进行编辑，我设置的各项是这样的：
```
# custom WebStorm VM options

-Xms128m
-Xmx2048m
-XX:ReservedCodeCacheSize=240m
-XX:+UseCompressedOops
```