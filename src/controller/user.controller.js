const {createUser,getUserInfo,updateUserInfo} =require('../service/user.service')
const {userRegisterError,userLoginError}=require('../constant/err.type')
// 发送tonken
const {JWT_SECRET}=require('../config/config.default')
const jwt =require('jsonwebtoken')

class UserController{
    async register(ctx,next){
        // 1获取post数据
        // console.log(ctx.request.body);
        const {user_name,password}=ctx.request.body;
      
        //数据合法性验证
        // if(!user_name || !password){
        //     console.error('用户名或者密码不可以为空',ctx.request.body)
        //     ctx.status=400
        //     ctx.body ={
        //         code:'1001',
        //         message:'用户或者密码不可以为空',
        //         result:'',
        //     }
        //     return 
        // }
        // //用户存在验证
        // if(await getUserInfo({user_name})){
        //     ctx.status =409
        //     ctx.body={
        //         code:'1002',
        //         message:'用户已经存在',
        //         result:'',
        //     }
        //     return
        // }
       // 2操作数据库接收数据库返回的结果
       try{
        const res =await createUser(user_name,password);
    
        // 3返回结果
        ctx.body={
            code:200,
            message:'用户注册成功',
            result:{
                id: res.id,
                user_name:res.user_name,
            },
         }
        
       }catch(e){
        console.log(e);
        ctx.app.emit('error',userRegisterError,ctx);
       }
       
    }

    async login(ctx,next){
        const { user_name }=ctx.request.body;
       try{
        const {password,...res}=await getUserInfo({user_name});
        
        ctx.body={
            code:200,
            user_name,
            message:'登录成功',
            result:{
                id: jwt.sign(res,JWT_SECRET,{expiresIn: '5d'}),
            },
         }
       }catch(e){
        console.error('用户登录失败',e);
        ctx.app.emit('error',userLoginError,ctx);
       }
      
    }
    // 修改密码
   async changePassword(ctx,next){
     // 获取修改信息
     const id=ctx.state.user.id
     const password=ctx.request.body.password
     console.log(id,password)
     // 操作数据库
     if(await updateUserInfo({id,password})){
        ctx.body ={
            code:200,
            message:'密码修改成功',
            result:''
        }
     }else{
        ctx.body={
            code:'1007',
            message:'密码修改失败',
            result:''
        }
     }
    }
}

module.exports=new UserController();