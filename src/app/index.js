// 引入绝对路径模块
const path =require('path');

const Koa =require('koa');
const{ koaBody }=require('koa-body');
const KoaStatic =require('koa-static');
const parameter=require('koa-parameter');

const router= require('../router/index');
const errHandler = require('./errHandler');

//导入errHeadler


// 实例化router
const app =new Koa();

//创建中间件
app.use(koaBody({
    multipart:true,
    formidable:{
        // 这里不可以写相对地址，用绝对路径进行调用
        uploadDir:path.join(__dirname,'../uploads'),
        keepExtensions:true,
    },
    parsedMethods:['POST','PUT','PATCH','DELETE'],
})); // 在所有的中件之前注册
app.use(router.routes())
.use(router.allowedMethods());
app.use(KoaStatic(__dirname+'../uploads'));
app.use(parameter(app));


// 导出app对象
app.on('error',errHandler);
module.exports=app;