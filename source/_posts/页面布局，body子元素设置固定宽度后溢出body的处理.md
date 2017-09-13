---
title: 页面布局，body子元素设置固定宽度后溢出body的处理
date: 2017-09-10 11:18:28
update:
comments:
tags:
categories: 其他
permalink:
---
>前段时间只用VUE+UI框架来做后台管理系统了，不用框架写页面竟然突然感到手生的厉害，甚至连布局的不灵便了.......
<!--more-->

## 问题
在布局的时候遇到了body里面的元素溢出的问题。按照常理body中的块级元素是会把body自然撑开的

___
比如将body中的div子元素的宽度设为1000px，那么当屏幕宽度小于1000时，div并不能将body撑开到1000
___

### 代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        html,body{
            margin: 0;
            padding: 0;
            height: 100%;
        }
    </style>
</head>
<body>
<div class="box" style="width: 1000px;height: 100%;background-color: black">
</div>
</body>
</html>
```
### 效果
![Alt 图片](/2017/09/页面布局，body子元素设置固定宽度后溢出body的处理/1.png)

## 解决办法

### 方法一：
___在设置宽的div元素外再增加一个div元素作为父级元素,并设置style="height:100%;overflow:auto;"___

#### 代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        html,body{
            margin: 0;
            padding: 0;
            height: 100%;
        }
    </style>
</head>
<body>
<!--新增父级div-->
<div style="height:100%;overflow:auto;">
	<div class="box" style="width: 1000px;height: 100%;background-color: black"></div>
</div>
</body>
</html>
```
### 效果
![Alt 图片](/2017/09/页面布局，body子元素设置固定宽度后溢出body的处理/2.png)

### 方法二：
___在html,body上都设置上style="overflow:auto;"___

#### 代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        html,body{
            margin: 0;
            padding: 0;
            height: 100%;
            overflow:auto;
        }
    </style>
</head>
<body>
<div class="box" style="width: 1000px;height: 100%;background-color: black"></div>
</body>
</html>
```