---
title: mac开发环境之nvm
date: 2017-03-11 10:31:06
update:
comments:
tags: [mac,nvm]
categories: 工具
permalink:
---

## 安装配置nvm
Install script

To install or update nvm, you can use the install script using cURL:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```
or Wget:
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```
The script clones the nvm repository to ~/.nvm and adds the source line to your profile (~/.bash_profile, ~/.zshrc, ~/.profile, or~/.bashrc).
```
export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```
You can customize the install source, directory, profile, and version using the NVM_SOURCE, NVM_DIR, PROFILE, and NODE_VERSION variables. Eg: curl ... | NVM_DIR=/usr/local/nvm bash for a global install.
NB. The installer can use git, curl, or wget to download nvm, whatever is available.
Note: On OS X, if you get nvm: command not found after running the install script, your system may not have a [.bash_profile file] where the command is set up. Simply create one with touch ~/.bash_profile and run the install script again.
If the above doesn't fix the problem, open your .bash_profile and add the following line of code:
```
source ~/.bashrc
```
For more information about this issue and possible workarounds, please refer here
Verify installation
To verify that nvm has been installed, do:
```
command -v nvm
```
which should output 'nvm' if the installation was successful. Please note that which nvm will not work, since nvm is a sourced shell function, not an executable binary.

### 安装切换各版本 node/npm
```
nvm install stable #安装最新稳定版 node，现在是 5.0.0
nvm install 4.2.2 #安装 4.2.2版本
nvm install 0.12.7 #安装 0.12.7版本
```
### 特别说明：以下模块安装仅供演示说明，并非必须安装模块
```
nvm use 0 #切换至 0.12.7 版本
npm install -g mz-fis #安装 mz-fis 模块至全局目录，安装完成的路径是 /Users/<你的用户名>/.nvm/versions/node/v0.12.7/lib/mz-fis
nvm use 4 #切换至 4.2.2 版本
npm install -g react-native-cli #安装 react-native-cli 模块至全局目录，安装完成的路径是 /Users/<你的用户名>/.nvm/versions/node/v4.2.2/lib/react-native-cli
nvm alias default 0.12.7 #设置默认 node 版本为 0.12.7
```
使用 .nvmrc 文件配置项目所使用的 node 版本
如果你的默认 node 版本（通过 nvm alias 命令设置的）与项目所需的版本不同，则可在项目根目录或其任意父级目录中创建 .nvmrc 文件，在文件中指定使用的 node 版本号，例如：
```
cd <项目根目录>  #进入项目根目录
echo > .nvmrc #添加 .nvmrc 文件
nvm use #无需指定版本号，会自动使用 .nvmrc 文件中配置的版本
node -v #查看 node 是否切换为对应版本
```
卸载nvm
```
rm -rf $NVM_DIR ~/.npm ~/.bower
```
