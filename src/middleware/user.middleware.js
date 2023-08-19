// 导入bcryptjs 加密包
const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/user.service')
const { userFormateError,
        userAlreadyExited,
        userRegisterError,
        userNotExited, 
        userLoginError,
        invalidPassword} = require('../constant/err.type')


const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormateError, ctx)
    return
  }
  await next()
}
// 验证是否存在用户
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body

  // if (await getUserInfo({ user_name })) {
  //   ctx.app.emit('error', userAlreadyExited, ctx)
  //   return
  // }
  try {
    const res = await getUserInfo({ user_name })
    if (res) {
      console.error('用户已存在', { user_name })
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (e) {
    console.error('获取用户信息错误', { user_name })
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }

  await next()
}
// 密码加密
const cryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body
  // 加盐
  const salt = bcrypt.genSaltSync(10);
  // 通过hash加密
  const hash = bcrypt.hashSync(password, salt)
  ctx.request.body.password = hash
  await next()
}


// 登录验证
const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  // 判断用户是否注册
  try {
    const res = await getUserInfo({ user_name })
    if (!res) {
      console.error('用户不存在', { user_name })
      ctx.app.emit('error', userNotExited, ctx)
      return
    }
    if(!bcrypt.compareSync(password, res.password)){
      ctx.app.emit('error', invalidPassword, ctx)
      return
    }
  } catch (e) {
    console.error('获取用户信息错误', { user_name })
    ctx.app.emit('error', userLoginError, ctx)
    return
  }
 
  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
}