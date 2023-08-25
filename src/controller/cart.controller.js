const {addGoodstoCart}=require('../service/cart.service')
const {addtoCartError}=require('../constant/err.type')
class CartController{
    // 添加商品到购物车
    async addtoCart(ctx,next){
        // 提取变量user_id 和 goods_id
         const user_id= ctx.state.user.id;
         const {goods_id,goods_num}= ctx.request.body;
        
         try{

            const res = await addGoodstoCart(user_id,goods_id,goods_num);
            console.log(res)
            ctx.body= {
                code:200,
                message:'添加商品成功',
                result:res
            }
         }catch(err){
             console.err(err);
             ctx.app.emit('error',addtoCartError,ctx)
         }
    }
}

module.exports = new CartController();