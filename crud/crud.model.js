const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName:String,
  emailId:String,
  phoneNo:String,
  createdAt:{
    type:String,
    default:Date.now,

  },
  randomNo:{
    type:Number,
    default:(100000 + Math.random() * 900000).toFixed(0),

  },
});

module.exports=mongoose.model("user",userSchema);
