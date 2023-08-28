const {addGoodstoCart,findCarts,updateCartMsg,removeCart,selectAllGoods}=require('../service/cart.service')
const {addtoCartError,cartFormatError,updateCartError,removeCartError}=require('../constant/err.type')
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
    async findAll(ctx,next){
     // 解析请求结果
     const{pageNum=1,pageSize=10}=ctx.request.query;
     // 操作数据库
     const res =await findCarts(pageNum,pageSize);
     ctx.body= {
        code:200,
        message:'查询成功',
        result:res
     }
    }
    async updateCart(ctx,next){
        // 提取变量user_id 和 goods_id
        const id=ctx.params.id;

        const {goods_num,selected} =ctx.request.body;
        // 未提交参数错误
        try{
            if(goods_num===undefined&&selected===undefined){
                cartFormatError.message='num和selected参数错误不能同时为空'
                return ctx.app.emit('error', cartFormatError,ctx)
            }
            // 操作数据库
            const res =await updateCartMsg({id,goods_num,selected})
            ctx.body={
                code:200,
                message:'更新成功',
                result:res
            }
        }catch(err){
              console.error(err);
              ctx.app.emit('error',updateCartError,ctx)
        }
    }
    async remove(ctx,next){
        try{
            const ids= ctx.request.body.ids;
            const res =await removeCart(ids);
            if(res>0){
                ctx.body={
                    code:200,
                    message:'删除购物车成功',
                    result:res
                }
            }else{
                ctx.body={
                    code:500,
                    message:'购物车删除失败',
                    result:0
                }
            }
            
        }catch(err){
            console.error(err);
            removeCartError.result;
            ctx.app.emit('error',removeCartError,ctx)
        }
    }
    async selectall(ctx,next){
        const  user_id= ctx.state.user.id;
        const  selected= ctx.request.body.selected;
    
        const res=await selectAllGoods(user_id,selected);
        ctx.body={
            code:200,
            message:'全选成功',
            result:res
        }
    }
}

module.exports = new CartController();