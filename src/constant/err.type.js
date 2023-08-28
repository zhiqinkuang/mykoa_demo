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
  },
  NullTokenError:{
    code: '10103',
    message: 'token为空',
    result: '',
  },
// 用户认证权限
  hasNotAdminPermission:{
    code:'10104',
    message:'没有管理员权限',
    result:''
  },
  // 用户上传错误
  fileUploadError:{
    code:'10201',
    message:'商品图片上传失败',
    result:''
  },
  // 文件类型错误
  unSupportFileType:{
    code:'10202',
    message:'上传类型错误',
    result:''
  },
   goodsFormatError:{
    code:'10203',
    message:'参数校验错误',
    result:''
  },
  publishGoodsError:{
    code:'10204',
    message:'发布商品失败',
    result:''
  },
  invalidIdError:{
    code:'10205',
    message:'商品不存在',
    result:''
  },
  updateGoodsError:{
    code:'10206',
    message:'更新商品失败',
    result:''
  },
  addtoCartError:{
    code:'10207',
    message:'加入购物车失败',
    result:''
  },
  cartFormatError:{
    code:'10301',
    message:'购物车参数格式错误',
    result:''
  },
  updateCartError:{
    code:'10302',
    message:'更新购物车失败',
    result:''
  },
  removeCartError:{
    code:'10303',
    message:'删除购物车失败',
    result:''
  },
  // 收货地址错误
  addressParamasError:{
    code:'10401',
    message:'收货地址参数错误',
    result:''
  },
  createAddressError:{
    code:'10402',
    message:'创建收货地址失败',
    result:''
  },
  getListArrayError:{
    code:'10403',
    message:'获取收货地址列表失败',
    result:''
  },
  updateAddressError:{
    code:'10404',
    message:'更新收货地址失败',
    result:''
  },
  removeAddressError:{
    code:'10405',
    message:'删除收货地址失败',
    result:''
  },
  changeDefaultError:{
    code:'10406',
    message:'设置默认地址失败',
    result:''
  },
  orderParamasError :{
    code:'10501',
    message:'订单参数错误',
    result:''
  },
  getOrderListError:{
    code:'10502',
    message:'获取订单列表失败',
    result:''
  }
  
 
}