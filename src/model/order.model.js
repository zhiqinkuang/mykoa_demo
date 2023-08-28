const { DataTypes } = require('sequelize')
const seq =require('../db/seq')

const Order= seq.define('demo_order',{
    user_id:{type:DataTypes.INTEGER,
        allowNull:false,
        comment:'用户id'
    },
   address_id:{
        type:DataTypes.STRING,
        comment:'地址id'
    },
    goods_info:{
        type:DataTypes.STRING,
        allowNull:false,
        comment:'商品信息'
    },
   total:{
        type:DataTypes.DECIMAL,
        allowNull:false,
        comment:'总金额'
    },
    order_number:{
        type:DataTypes.CHAR(30),
        allowNull:false,
        comment:'订单号'
    },
    status:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:0,
        comment:'订单状态'
    }
})
// Order.sync({force:true})

module.exports=Order