const jwt = require('jsonwebtoken')
const {JWT_SECRET}=require('../config/config.default')
const {tokenExpiredError, invalidToken,hasNotAdminPermission}=require('../constant/err.type')

const auth = async (ctx,next)=> {
    const {authorization={}}=ctx.request.header
    const token =authorization.replace('Bearer ','')
    try{
        const user =jwt.verify(token,JWT_SECRET)
        // 解密用户信息
        ctx.state.user = user
        
        
    }catch(err){
        switch (err.name) {
            case 'TokenExpiredError':
              console.error('token已过期', err)
              return ctx.app.emit('error', tokenExpiredError, ctx)
            case 'JsonWebTokenError':
              console.error('无效的token', err)
              return ctx.app.emit('error', invalidToken, ctx)
          }
    }
   await next()
}

const authAdmin = async (ctx,next)=> {
    const is_admin=ctx.state.user.is_admin
 
    if(!is_admin){
        console.error('非管理员禁止访问',ctx.state.user)
        return ctx.app.emit('error', hasNotAdminPermission, ctx)
    }

    await next() 
}

module.exports={
    auth,
    authAdmin 
}