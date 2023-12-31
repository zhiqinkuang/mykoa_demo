const   Goods=require('../model/goods.model')
class GoodService{
    async createGoods(goods){   
     const res=await Goods.create(goods)
     
     return res.dataValues
    }

    async updateGoods(id,goods){
        const res =await Goods.update(goods,{where:{id}})
        return res[0]>0  ? true : false;
    }
    async removeGoods(id){
        const res= await Goods.destroy({where:{id}});

        return res>0?true:false;
    }
    async restoreGoods(id){
        const res= await Goods.restore({where:{id}});
  
        return res>0?true:false;
    }
    async findGoods(pageNum,pageSize){
        const count= await Goods.count();
     
       const offset=pageSize*(pageNum-1);
       const rows= await Goods.findAll({offset:offset,limit:pageSize*1})
       return {pageNum,
               pageSize,
               total:count,
               list:rows,
            }
    }
    
}
 module.exports = new GoodService();