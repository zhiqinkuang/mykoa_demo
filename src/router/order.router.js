const Router = require('koa-router')
const {auth}= require('../middleware/auth.middleware')
const {create,getList,update} =require('../controller/order.controller')
const {validator}= require('../middleware/order.middleware')

const router = new Router({prefix:'/orders'})

router.post('/',auth,validator({
    address_id:'int',
    goods_info:'string',
    total:"string",
    status:'int'
}),create)
// 获取订单列表
router.get('/',auth,getList)
// 更改订单列表
router.patch('/:id',auth,validator({
    status:'int'
}),update)
module.exports=router