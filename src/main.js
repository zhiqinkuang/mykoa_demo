// 导入包
const app =require('./app')
const {APP_PORT} =require('./config/config.default');

app.listen(APP_PORT,()=>{
    console.log(`bye kiri app run on ${APP_PORT}`);
})