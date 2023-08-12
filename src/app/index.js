const Koa =require('koa');
const userRouter=require('../router/user.router');

// 实例化router
const app =new Koa();


//创建中间件
app.use(userRouter.routes())

// 导出app对象

module.exports=app;