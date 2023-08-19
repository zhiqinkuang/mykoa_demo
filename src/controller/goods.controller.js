class GoodsControl{
    async upload(ctx,next){
        ctx.body = {
            code:200,
            message:'图片上传成功',
    }
}
}
module.exports =  new GoodsControl()