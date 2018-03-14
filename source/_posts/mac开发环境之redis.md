---
title: mac开发环境之redis
tags:
  - mac
  - redis
categories: 工具
abbrlink: 8655
date: 2017-03-08 10:33:03
update:
comments:
permalink:
---

## 安装配置redis
安装命令
```
brew install redis
```
开机自动启动redis命令：
```
$ ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents
```
You can use launchctl to start and stop redis
```
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
$ launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```
You can also more conveniently use brew to start, stop, and verify service status
```
$ brew services list | grep redis
$ brew services start redis
$ brew services stop redis
```
检查是否启动：
```
redis-cli ping
```
Notes:
The default plist provided by homebrew stores the redis configuration at /usr/local/etc/redis.conf.
For more about launchctl see:
https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/launchctl.1.html#//apple_ref/doc/man/1/launchctl
http://launchd.info/
### Note：安装redis desktop manager
1、确保安装好了brew、brew-cask
2、然后终端输入：brew cask install rdm