const { addressParamasError } = require("../constant/err.type")


const validator = (reules)=>{
    return async (ctx,next)=>{
        try{
             ctx.verifyParams(reules)
        }catch(err){
            console.error(err)
            ctx.app.emit('error', addressParamasError, ctx)
        }
        await next()
    }
    
}

module.exports ={validator}