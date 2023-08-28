
const {invalidIdError, cartFormatError} = require('../constant/err.type')
const validator =(rules)=>{ 

   return async(ctx,next)=>{
    try{
      ctx.verifyParams(
         rules
      )
    }catch(err){
        console.error(err);
        cartFormatError.result=err;
      //   invalidIdError.result=err;
        return ctx.app.emit('error', cartFormatError,ctx);
    }
    await next();
}
}
// 验证一购物车信息
const cartValidator =async(ctx,next)=>{
  try{
    ctx.verifyParams({
       goods_id:'number',
    })
  }catch(err){
      console.error(err);
    //   invalidIdError.result=err;
      return ctx.app.emit('error',invalidIdError,ctx);
  }
  await next();
}
module.exports = {cartValidator,validator};