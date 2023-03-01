const crudModel=require("./crud.model");
const {
    Types:{ ObjectId:ObjectId},
}=require("mongoose");

exports.createUser=async (data)=>{
    return await crudModel.create(data);
}

exports.editUser=async (data)=>{
    return await crudModel.updateOne(
        {_id:ObjectId(data.id) },
        {
            $set:{
                firstName:data.firstName,
                lastName:data.lastName,
                emailId:data.emailId,
                phoneNo:data.phoneNo,
            }
        }
        );
}
exports.getUser = async (data) => {
    return await crudModel.findOne({_id:ObjectId(data.id)});
}
exports.deleteUser = async (data) => {
    return await crudModel.deleteOne({_id:ObjectId(data.id)});
}

exports.getUsers = async (data) => {
    let query={};
    if(data.search){
        query.$or=[
            {firstName:{$regex: data.search,$options:"$i"}},
            {lastName:{$regex: data.search,$options:"$i"}}

        ]
    }
    const response={};
    response.list= await crudModel
    .find(query)
    .limit(data.limit)
    .skip(data.start)
    .sort({firstName:1});
    response.totalCount=await crudModel.count(query)
    return response
}
