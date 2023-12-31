const {DataTypes}=require('sequelize');

const seq= require('../db/seq')
const Goods =require('../model/goods.model')
const Cart=seq.define('demo_cart',{
    goods_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        comment:'商品名称'
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        comment:'用户id'
    },
    goods_num:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0,
        comment:'商品数量'
    },
    selected:{
     type:DataTypes.BOOLEAN,
     allowNull:false,
     defaultValue:true,
     comment:'是否选择'
    },
   
})
// Cart.sync({force:true})
Cart.belongsTo(Goods,{foreignKey:'goods_id',
targetKey:'id', 
as: 'goods_info'})
module.exports=Cart