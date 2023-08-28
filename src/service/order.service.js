const Order= require('../model/Order.model')

class OrderService{
    async createOrder(order){
     const {user_id,address_id,goods_info,total,status,order_number}=order
     const res = Order.create({user_id,address_id,goods_info,total,status,order_number})
     return res ? 'success' : 'fail';
    }
    async getOrderList(params){
        const {user_id,PageNum,PageSize,status}=params
        const offset = (PageNum - 1) * PageSize
        console.log('测试',PageNum,PageSize,offset,status,user_id)
         let pageLimit= PageSize*1
         const{count , rows} =await Order.findAndCountAll({where:{user_id,status:status*1},
            offset:offset,
            limit:pageLimit,
            attributes:["id", 
            "address_id",
            "goods_info",
            "total",
            "order_number",
            "status"]
        })
         
         return {
            PageNum,
            PageSize,
            total:count,
            List:rows
        }
    }
    async  updateOrder(id,user_id,state){
        const res = await Order.update({status:state},{where:{id,user_id}})
        return res ? 'success' : 'fail';
    }
}

module.exports = new OrderService();