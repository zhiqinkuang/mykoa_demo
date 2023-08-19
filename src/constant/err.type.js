module.exports = {
  userFormateError: {
    code: '1001',
    message: '用户名或密码为空',
    result: '',
  },
  userAlreadyExited: {
    code: '1002',
    message: '用户已经存在了',
    result: '',
  },
  userRegisterError: {
    code: '1003',
    message: '注册失败',
    result: '',
  },
  userNotExited: {
    code: '1004',
    message: '用户不存在',
    result: '',
  },
  userLoginError: {
    code: '1005',
    message: '登录失败',
    result: '',
  },
  invalidPassword: {
    code: '1006',
    message: '密码错误',
    result: '',
  },
  // token 验证错误
  tokenExpiredError:{
    code: '10101',
    message: 'token过期',
    result: '',

  }, 
  invalidToken:{
    code: '10102',
    message: 'token无效',
    result: '',
  }
 
}