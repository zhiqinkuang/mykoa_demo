const Koa =require('koa');
const app =new Koa();
const {APP_PORT} =require('./config/config.default')
app.use((ctx,next)=>{
    ctx.body='hello world!'
})

app.listen(APP_PORT,()=>{
    console.log('bye kiri app run on');
})