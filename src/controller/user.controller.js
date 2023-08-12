const {createUser} =require('../service/user.service')
class UserController{
    async register(ctx,next){
        // 1获取post数据
        // console.log(ctx.request.body);
        const {user_name,password}=ctx.request.body;
        // 2操作数据库接收数据库返回的结果
        const res =await createUser(user_name,password);
        console.log(res);
        // 3返回结果
        ctx.body=ctx.request.body;
    }

    async login(ctx,next){
        ctx.body='登录成功';
    }
}

module.exports=new UserController;