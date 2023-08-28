const Address= require('../model/address.model.js')

class AddressService{
    async createAddress(addressObj){
       const {user_id,cosignee,phone,address}=addressObj
        const res = await Address.create({user_id,cosignee,phone,address})
        return res ? `${cosignee}地址创建成功`:`创建失败`;  
    }
    async  getAddressList(user_id){
        const res = await Address.findAll({
            attributes:['id','cosignee','phone','address','isdefault'],
            where:{user_id}})

        return res;
    }
    async updateAddress(id,params){
        const {cosignee,phone,address,isdefault}=params
        const  res = await Address.update({cosignee,phone,address,isdefault},{where:{id}})
        return res[0]>0?res[0]:0;
    }
    async removeAddress(id,user_id){
         const res = await Address.destroy({where:{id,user_id}})
         return res;
    }
    async changeDefaultAddress(id,user_id){
        const res = await Address.update({isdefault:false},{where:{user_id,id}})
         return res
    }
}

module.exports = new AddressService();