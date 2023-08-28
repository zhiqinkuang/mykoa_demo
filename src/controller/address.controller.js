const {createAddress,
    getAddressList,
    updateAddress,
    removeAddress,
    changeDefaultAddress}=require('../service/address.service')

const {createAddressError,
    getListArrayError,
    updateAddressError,
    removeAddressError,
    changeDefaultError} =require('../constant/err.type')


class AddressController{
    async create(ctx){
        try{
            const user_id=ctx.state.user.id
            const {cosignee,phone,address}=ctx.request.body
            const res= await  createAddress({user_id,cosignee,phone,address})
            ctx.body={
                code:200,
                msg:'创建地址成功',
                data:res
            }
        }catch(err)
        {
          console.error(err)
          createAddressError.result='创建地址失败'
          ctx.app.emit('error',createAddressError,ctx)
        }
        
    }
    async getList(ctx){
        try{
            const user_id=ctx.state.user.id
            const res =await getAddressList(user_id)
        
            ctx.body={
                code:200,
                msg:'获取地址列表成功',
                data:res
            }
        }catch(err){
          console.error(err)
          getListArrayError.result='获取地址列表失败'
          ctx.app.emit('error',getListArrayError,ctx)
        }
    }
    async update(ctx){
        try{
            const params=ctx.request.body
            
            const id=ctx.request.params.id;
            const res =await updateAddress(id,params)
            ctx.body={
                code:200,
                msg:'更新地址成功',
                data:res
            }
        }catch(err){
            console.error(err)
            updateAddressError.result='更新地址失败'
            ctx.app.emit('error',updateAddressError,ctx)
        }
    }
    async remove(ctx){
        try{
        const id = ctx.request.params.id;
        const user_id=ctx.state.user.id
        
        const res= await removeAddress(id,user_id)
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
            console.error(err)
            removeAddressError.result='删除购物车失败'
            ctx.app.emit('error',removeAddressError,ctx)
        }
        
    }
    async changeDefault(ctx){
        const id =ctx.request.params.id;
        const user_id=ctx.state.user.id
        const isdefault=ctx.request.body.isdefault
        try{
            const res = await changeDefaultAddress(id,user_id,isdefault)
            if(res>0){
                ctx.body={
                    code:200,
                    msg:'更新地址成功',
                    data:res
                }
            }else{
                ctx.body={
                code:500,
                msg:'更新地址失败',
                data:0
            }
            }
           
        }catch(err){
            console.error(err)
            changeDefaultError.result='更新默认地址失败'
            ctx.app.emit('error',changeDefaultError,ctx)  
        }
    }
}

module.exports=new AddressController()