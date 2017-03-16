## File-watcher
一个文件监控以及上传系统
## 使用

```bash
# clone项目到本地
git clone https://github.com/gatinul/File-watcher.git

# 安装依赖
npm install 

# 调试代码前 在localhost:3000 启动项目
npm run dev
```
## 主要功能
- 利用chokidar监听文件改变
- 将改动的文件名显示在web页面中
- 利用node child_process exec 在node中执行命令行 以进行页面点击上传svn，服务器功能

## 页面截图

![图片](https://github.com/gatinul/File-watcher/raw/master/Screenshots/screen.png)


## todo

1. 页面中增加选择要监听的目录
2. 判断改变的文件为js，css，html，image 传入对应服务器文件中
3. gulp-ftp , gulp-svn 上传文件 目前执行的gulp-uglify试试效果
4. 文件名重复时，只显示最后更改的一行
