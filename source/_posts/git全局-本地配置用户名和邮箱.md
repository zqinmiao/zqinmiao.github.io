---
title: git全局/本地配置用户名和邮箱
date: 2017-08-11 23:41:20
update:
comments:
tags: [Git]
categories: [工具]
permalink:
---

## 查看用户名和地址
### 查看本地的用户名和邮箱
```
$ git config user.name
$ git config user.email
```
### 查看全局的命令
```
$ git config --global user.name
$ git config --global user.email
```
## 修改用户名和地址
### 全局
```
$ git config --global user.name "your name"
$ git config --global user.email "your email"
```
### 本地
进入项目文件夹，.git文件夹是隐藏的
```
$ cd .git
$ git config --global user.name "your name"
$ git config --global user.email "your email"
```