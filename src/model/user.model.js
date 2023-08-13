const {  DataTypes } = require('sequelize');
const seq =require('../db/seq');
// 这定义一个表
const User = seq.define('demo_user', {
    // 在这里定义模型属性
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      comment:'用户名,唯一', 
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull:false,
      comment:'密码'
      // allowNull 默认为 true
    },
    is_admin:{
      type:DataTypes.BOOLEAN,
      allow:false,
      defaultValue:0,
      comment:'是否为管理员'
    }
  });
// 强制创建数据表
  // User.sync({force:true})

  module.exports=User;