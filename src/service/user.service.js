// 用于操作数据库
class UserServcie{
    async createUser(username,password){
    // 写入数据库
    return  '写入数据库成功'    
    }
}

module.exports =new UserServcie();