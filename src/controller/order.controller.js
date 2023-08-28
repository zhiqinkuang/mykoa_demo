const {createOrderError,getOrderListError}= require('../constant/err.type')

const {createOrder,getOrderList, updateOrder}= require('../service/order.service')
class OrderController{
   async create(ctx){
    const params= ctx.request.body;
    const user_id = ctx.state.user.id;
    const order_number= 'kiri'+Date.now();
    try{
      const res = await createOrder({user_id,order_number,...params})
      ctx.body={
         code:200,
         message:'创建订单成功',
         data:res
      }
    }catch(err){
      console.error(err);
      createOrderError.message=err;
      ctx.app.emit('error',createOrderError,ctx);
    }
}
  async getList(ctx){
    const user_id = ctx.state.user.id;
    const {PageNum=1,PageSize=10,status=0}=ctx.request.query;
    try{
      const res = await getOrderList({user_id,PageNum,PageSize,status})
      ctx.body={
         code:200,
         message:'获取订单列表成功',
         data:res
      }
    }catch(err){
      console.error(err);
      ctx.app.emit('error',getOrderListError,ctx);
    }
  }
  async update(ctx){
   const id = ctx.params.id;
   const user_id = ctx.state.user.id;
   const  {state}= ctx.request.body;
   const res= await updateOrder(id,user_id,state);
   ctx.body={
      code:200,
      message:'更新订单成功',
      data:res
   }
  }
}
module.exports = new OrderController();