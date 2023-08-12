const Koa =require('koa');
const{ koaBody }=require('koa-body');
const userRouter=require('../router/user.router');

// 实例化router
const app =new Koa();


//创建中间件
app.use(koaBody()); // 在所有的中件之前注册
app.use(userRouter.routes());

// 导出app对象

module.exports=app;