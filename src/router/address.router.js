// 导入koa-router包
const Router = require('koa-router')

const {auth}=require('../middleware/auth.middleware')
const {validator}=require('../middleware/address.middleware')
const {create,getList,update,remove,changeDefault}=require('../controller/address.controller')
// 实例化对象
const router= new Router({prefix:'/address'});
// 添加地址
router.post('/',auth,validator({
    cosignee:'string',
    phone:{
        type:'string',
        format:/^1\d{10}$/,
        address:'string'
    },
    address:'string'

}),create)
// 获取地址列表
router.get('/',auth,getList)
// 修改地址
router.post('/:id',auth,validator({
    cosignee:'string',
    phone:{
        type:'string',
        format:/^1\d{10}$/,
        address:'string'
    },
    address:'string'
}),update)
// 删除地址
router.delete('/:id',auth,remove)
// 修改默认地址
router.patch('/:id',auth,changeDefault)
module.exports = router