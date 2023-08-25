const path =require('path')
const {createGoods,updateGoods,removeGoods,restoreGoods,findGoods}= require('../service/goods.service')
const {fileUploadError,unSupportFileType,publishGoodsError,invalidIdError}=require('../constant/err.type')
const { log } = require('console')

class GoodsControl{
    async upload(ctx,next){
        const {file}=ctx.request.files
        // 限制文件类型 
        const fileType = ['image/jpeg','image/png']
        if (file){
           if(!fileType.includes(file.mimetype)){
              return ctx.app.emit('error',unSupportFileType,ctx)
           }
            ctx.body = {
                code:200,
                message:'图片上传成功',
                result:{
                    goods_img: path.basename(file.filepath)
                }
        }
        }else{
            return ctx.app.emit('error',fileUploadError,ctx)
        }
   

}
    async create(ctx,next){
        // 直接调用service的createGoods
        try{
          const {createdAt,updatedAt,...res}=  await createGoods(ctx.request.body)
          ctx.body={
            code:'200',
            message:'商品创建成功',
            result:res
          }
        }catch(err){
           console.log(err);
           return ctx.app.emit('error',publishGoodsError,ctx)
        }
      
    }
    async update(ctx,next){
       try{
        const res= await updateGoods(ctx.params.id,ctx.request.body)
        if(res){
            ctx.body={
                code:'200',
                message:'商品修改成功',
                result:''
              } 
        }
        else{
            return ctx.app.emit('error',invalidIdError,ctx)
        }
       }catch(err){
         console.error(err)
         return ctx.app.emit('error',updateGoodsError,ctx)
       }
    }
    async remove(ctx,next){
       const res= await removeGoods(ctx.params.id,ctx)
       console.log(res);
       if(res){
        ctx.body={
            code:200,
            message:'下架成功',
            result:''
        }
       }else{
        return ctx.app.emit('error',invalidIdError,ctx)
       }
        
    }
    async restore(ctx,next){
        const res= await restoreGoods(ctx.params.id,ctx)
        if(res){
         ctx.body={
             code:200,
             message:'重新上架成功',
             result:''
         }
        }else{
         return ctx.app.emit('error',invalidIdError,ctx)
        }
         
     }
    async findAll(ctx){
      const {pageNum=1,pageSize=10}=ctx.request.query
      // 处理返回的数据
     const res= await findGoods(pageNum,pageSize)
      // 返回结果
      ctx.body={
        code:200,
        message:'查询商品列表成功',
        result:res,
      }
    } 
}
module.exports =  new GoodsControl()