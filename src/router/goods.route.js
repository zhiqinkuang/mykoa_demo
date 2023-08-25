const Router = require('koa-router');
const router = new Router({prefix:'/goods'});
const {upload,create,update,remove,restore,findAll} =require('../controller/goods.controller');
const {auth,authAdmin} =require('../middleware/auth.middleware');
const {validator} =require('../middleware/goods.middleware');
// 商品上传接口
router.post('/upload',auth,authAdmin ,upload)
// 发布商品接口
router.post('/',auth,authAdmin,validator,create)
// 更新商品接口
router.put('/:id',auth,authAdmin,validator,update)
//强制删除商品
// router.delete('/:id',auth,authAdmin,remove)
//下架商品
router.post('/:id/off',auth,authAdmin,remove)
//从新上架
router.post('/:id/on',auth,authAdmin,restore)
// 获取商品的列表
router.get('/',findAll)
module.exports = router;