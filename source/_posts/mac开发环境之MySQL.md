---
title: mac开发环境之MySQL
tags:
  - mac
  - mysql
categories: 工具
abbrlink: 43582
date: 2017-03-03 10:29:16
update:
comments:
permalink:
---

## 安装配置mysql
### 安装包安装：
1、下载安装包，安装完后
2:配置环境变量
打开终端,输入： cd ~
会进入~文件夹
然后输入：
```
touch .bash_profile
```
回车执行后，再输入：
```
open -e .bash_profile
```
打开文件后添加：PATH=$PATH:/usr/local/mysql/bin
或者：
Try adding the following line to your .bash_profile file.
```
export PATH="/usr/local/mysql/bin:$PATH"
```
You can do this easily with the following command, which will append the line if the file already exists or create a new file with the line if it doesn't.
```
echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.bash_profile
```
### 安装 MySQL:
```
$ brew update # 这是一个好习惯
$ brew install mysql
```
在使用 MySQL 前，我们需要做一些设置：
```
$ unset TMPDIR
$ mkdir /usr/local/var
$ mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp
```
### 使用
启动 MySQL 服务，运行 mysql.server
```
$ mysql.server start
```
关闭 MySQL，运行：
```
$ mysql.server stop
```
你可以了解更多 mysql.server 的命令，运行：
```
$ mysql.server --help
```
登录 MySQL, 运行:
```
$ mysql -uroot
```
Note: 默认情况下，MySQL 用户 root 没有密码，这对本地开发没有关系，但如果你希望修改密码，你可以运行:
```
$ mysqladmin -u root password 'new-password'
```
退出mysql服务：
```
mysql > quit
```
quit不需要分号。

重启服务：
```
mysql.server restart
```
Note：如果已经设置过密码，需要修改密码的话：
```
mysql -u root -p
mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('newpass’);
```
### 如使用brew安装：brew uninstall mysql 或者 brew remove mysql
但是又有点怕某些东西没有卸载完全影响到下一次的安装（我第一次重装就是这样的��）以下是完整一点的手动卸载：

* sudo rm /usr/local/mysql
* sudo rm -rf /usr/local/mysql*
* sudo rm -rf /Library/StartupItems/MySQLCOM
* sudo rm -rf /Library/PreferencePanes/My*
* rm -rf ~/Library/PreferencePanes/My*
* sudo rm -rf /Library/Receipts/mysql*
* sudo rm -rf /Library/Receipts/MySQL*
* sudo rm -rf /var/db/receipts/com.mysql.*

### 添加修改mysql配置
```
mysqld --help --verbose | more (查看帮助, 按空格下翻)
```
你会看到开始的这一行(表示配置文件默认读取顺序)
```
Default options are read from the following files in the given order: /etc/my.cnf /etc/mysql/my.cnf /usr/local/etc/my.cnf ~/.my.cnf
```
通常这些位置是没有配置文件的, 所以要自己建一个
```
ls $(brew --prefix mysql)/support-files/my-* (用这个可以找到样例.cnf)
cp /usr/local/opt/mysql/support-files/my-default.cnf /etc/my.cnf (拷贝到第一个默认读取目录)
```
按需修改my.cnf
### 错误相关：
#### 1、ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (61)
解决方法：
```
sudo /usr/local/mysql/support-files/mysql.server start
```
#### 2、Error: Command failed:  /bin/sh: mysql: command not found
解决方法：
有可能是/user/local/bin目录下缺失mysql导致，需要以下方法来解决：把MYSQLPATH/bin/mysql映射到/usr/local/bin目录下：
```
$ cd /usr/local/bin$ ln -fs /MYAQLPATH/bin/mysql mysql
```
注意：这里的MYAQLPATH要替换成/usr/local/mysql-5.7.16-osx10.11-x86_64/，即base Directory中的路径
