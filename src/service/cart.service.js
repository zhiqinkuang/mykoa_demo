
const Cart = require('../model/cart.model')
class CartService{
    
    async addGoodstoCart(user_id,goods_id,goods_num){
        //先进行查找
  let  hascart =await Cart.findOne({
       where:{
        goods_id,
        user_id,
       }
  })
  
  if(hascart){
    await Cart.update({
        goods_num
   },{where:{ goods_id,
        user_id,}})
     return {
        goods_id,
        user_id,
        goods_num
     }
  }else{
    let res = await Cart.create({
        goods_id,
        user_id,
        goods_num
    })
        return res.dataValues
  }
   
}

}

module.exports = new CartService();