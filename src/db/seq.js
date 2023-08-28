const {Sequelize} =require('sequelize');
const{MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PW,
    MYSQL_DB}= require('../config/config.default')
// 实例化对象
const seq =new Sequelize(MYSQL_DB,MYSQL_USER,MYSQL_PW,{
    host:MYSQL_HOST,
    dialect:'mysql',
    timezone: '+08:00', 
});

// 测试数据库
// seq.authenticate().then(()=>{
//     console.log('数据库连接成功')
// }).catch((err)=>{
//     console.log(err);
// })

module.exports=seq;