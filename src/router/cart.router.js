// 导入包
const Router= require('koa-router');
const {auth} =require('../middleware/auth.middleware');
const {cartValidator}= require('../middleware/cart.middleware')
const {addtoCart}=require('../controller/cart.controller')
// 实例化router
const router= new Router({prefix:'/cart'});



// 设置router
router.post('/',auth,cartValidator,addtoCart)


// 导出router
module.exports= router;