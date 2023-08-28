const {DataTypes}=require('sequelize');

const seq= require('../db/seq')

const Address=seq.define('demo_address',{
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        comment:'用户id'
    },
    cosignee:{
        type:DataTypes.STRING(100),
        allowNull:false,
        comment:'收件人名称'
    },
    address:{
     type:DataTypes.STRING(100),
     allowNull:false,
     comment:'用户地址'
    },
    phone:{
        type:DataTypes.STRING(100),
        allowNull:false,
        comment:'电话号码'
    },
    isdefault:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
        comment:'是否默认地址'
    }
   
})
// Address.sync({force:true})

module.exports=Address