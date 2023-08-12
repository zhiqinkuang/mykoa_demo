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
## 添加路由
* 安装路由
```
npm install koa-router
```
* 导入包
* 实例化对象
* 编写路由
* 注册中间件
```js
// 导入包
const Koa =require('koa');
const Router=require('koa-router');
const {APP_PORT} =require('./config/config.default')
// 实例化router
const app =new Koa();
const indexRouter= new Router();
const userRouter = new Router();
//注册路由
indexRouter.get('/',(ctx,next)=>{
  ctx.body='hello index';
});
userRouter.get('/user',(ctx,next)=>{
  ctx.body='hello user';
})
//创建中间件
app
.use(indexRouter.routes())
.use(userRouter.routes())
   

app.listen(APP_PORT,()=>{
    console.log('bye kiri app run on');
})
```
拆分组件：创建一个router 组件
```js
//创建组件对app进行拆分,在router文件夹下安装 config.default.js
const Router =require ('koa-router')

const router= new Router({prefix:'/users'})

// GET/users/

router.get('/',(ctx,next)=>{
    ctx.body='hello users'
})

module.exports= router

```

将index 和 main.js 进行拆分
创建一个app文件夹在里面进行写入一个index.js 主要写入一些中间件
```js
const Koa =require('koa');
const userRouter=require('../router/user.router');

// 实例化router
const app =new Koa();


// 创建中间件
app.use(userRouter.routes())

// 导出app对象
module.exports=app;

```
路由和控制器的拆分,创建一个controller文件夹并且创建一个 user.controller文件，这样就可以代替路由注册的功能。
```js
class UserController{
    async register(ctx,next){
        ctx.body='用户注册成功';
    }

    async login(ctx,next){
        ctx.body='登录成功';
    }
}

module.exports=new UserController;

```
在路由的文件里面 user.router.js
```js
const Router =require ('koa-router')

const router= new Router({prefix:'/users'})
const {register,login} =require('../controller/user.controller')

// Post/users
router.post('/register',register)
// 注册接口
router.post('/login',login)

module.exports= router
```
koa-body中间件包
```
npm install koa-body
```
在index.js 里面导入