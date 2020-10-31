// 拷贝静态文件

const shell = require('shelljs')

shell.cp("-R", "./public/", "./dist/")
shell.cp("-R", "./views/", "./dist/")
