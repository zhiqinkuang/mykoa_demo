# Koa 后端实战
> 推荐视频 https://www.bilibili.com/video/BV13A411w79h?p=3&spm_id_from=pageDriver&vd_source=9db27ccccc6b1cadb96ba262bd4f7c5f
## 项目的初始化
*  npm init -y 初始化包管理器
*  git init 初始git 
*  添加 .gitignore 写入 node_module 
* 安装koa    npm install koa
* 安装 npm i  dotenv  读取配置文件
* 创建 .env 配置一下基本信息 创建src 下的config 文件

* 安装node 调试工具 nodemon  npm i nodemon
* 在pakage.json 添加dev脚本"scripts": {
    "dev": "nodemon ./src/main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
* 创建src 文件夹 main.js 入口文件
## 快速入门
```js
const Koa =require('koa');
const app =new Koa();

app.use((ctx,next)=>{
    ctx.body='hello world'
})

app.listen(3000,()=>{
    console.log('bye kiri');
})
```