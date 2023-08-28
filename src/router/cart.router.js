// 导入包
const Router= require('koa-router');
const {auth} =require('../middleware/auth.middleware');
const {validator} = require('../middleware/cart.middleware')
const {addtoCart,findAll,updateCart,remove,selectall}=require('../controller/cart.controller')

// 实例化router
const router= new Router({prefix:'/cart'});
// 设置router
router.post('/',auth,validator({ goods_id:'number'}),addtoCart)
// 购物车列表
router.get('/',auth,findAll)
// 更新购物车,使用patch
router.patch('/:id',auth,validator({goods_num:{type:'number',required:false},
selected:{type:'bool',required:false}}),updateCart)
// 删除购物车
router.delete('/',auth,validator({ ids:'array'}),remove)
// 选择全部
router.post('/selectAll',auth,selectall)
// 导出router
module.exports= router;