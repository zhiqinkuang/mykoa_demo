const Router =require ('koa-router')

const router= new Router({prefix:'/users'})
const {register,login} =require('../controller/user.controller')

// Post/users
router.post('/register',register)
// 注册接口
router.post('/login',login)

module.exports= router