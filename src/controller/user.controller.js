const {createUser,getUserInfo} =require('../service/user.service')
class UserController{
    async register(ctx,next){
        // 1获取post数据
        // console.log(ctx.request.body);
        const {user_name,password}=ctx.request.body;
      
        //数据合法性验证
        if(!user_name || !password){
            console.error('用户名或者密码不可以为空',ctx.request.body)
            ctx.status=400
            ctx.body ={
                code:'1001',
                message:'用户或者密码不可以为空',
                result:'',
            }
            return 
        }
        //用户存在验证
        if(await getUserInfo({user_name})){
            ctx.status =409
            ctx.body={
                code:'1002',
                message:'用户已经存在',
                result:'',
            }
            return
        }
       // 2操作数据库接收数据库返回的结果
        const res =await createUser(user_name,password);
        // 3返回结果
        ctx.body={
            code:0,
            message:'用户注册成功',
            result:{
                id: res.id,
                user_name:res.user_name,
            },
        }
    }

    async login(ctx,next){
        ctx.body='登录成功';
    }
}

module.exports=new UserController();