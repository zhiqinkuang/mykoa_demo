const Cart = require('../model/cart.model')
const Goods = require('../model/goods.model')
const {Op} = require('sequelize')
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

async findCarts(pageNum,pageSize){

  const{count,rows} = await Cart.findAndCountAll({
      attributes:['id','goods_num','selected'],
      limit:pageSize*1,
      offset:(pageNum-1)*pageSize,
      order:[['id','desc']],
      include:{model:Goods,
        as:'goods_info',
        attributes:['id','goods_name','goods_price','goods_img']
      },
  })
 
  return {
    pageNum,
    pageSize,
    total:count,
    list:rows
  }
}
// 更新数据库
  async updateCartMsg(params){
    const {id,goods_num,selected}= params;
    const res =await Cart.findByPk(id);
    if(!res)
     return ''

    goods_num !==undefined ? (res.goods_num = goods_num):''
    if(selected !==undefined){
      res.selected =selected;
    }
    // 更新结果
   return await  res.save()
  }
// 删除购物车
async removeCart(ids){
 return await Cart.destroy({
    where:{
      id:{
      [Op.in]: ids,
    },
  }
  })

 
}

//全选购物车商品
async selectAllGoods(user_id,selected){
   console.log('测试：',user_id,selected);
    return Cart.update({selected},{
        where:{user_id}
    })
}
}
module.exports = new CartService();