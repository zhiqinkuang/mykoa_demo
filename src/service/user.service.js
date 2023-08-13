// 创建一个用户对象
const User =require('../model/user.model');
// 用于操作数据库
class UserService{
    async createUser(user_name,password){
    // 插入数据
    const res =await User.create({user_name,password});
    return res.dataValues;
    }

    async getUserInfo({id,user_name,password,is_admin}){
        const whereOpt={}

        id && Object.assign(whereOpt,{id})
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
        is_admin && Object.assign(whereOpt, { is_admin })

        const res= await  User.findOne({
            attributes:['id','user_name','password','is_admin'],
            where: whereOpt,
        });
       // 返回结果
       
       return res ? res.dataValues : null
    }
}

module.exports =new UserService();