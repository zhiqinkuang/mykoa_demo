const Koa =require('koa');
const{ koaBody }=require('koa-body');
const router= require('../router/index');

const errHandler = require('./errHandler');

//导入errHeadler


// 实例化router
const app =new Koa();


//创建中间件
app.use(koaBody()); // 在所有的中件之前注册
app.use(router.routes())
.use(router.allowedMethods());



// 导出app对象
app.on('error',errHandler);
module.exports=app;