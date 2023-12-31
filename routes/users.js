const mongoose=require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/testing")

const userSchema=mongoose.Schema({
  username:String,
  nickname:String,
  description:String,
  categories:{
    type:Array,
    default:[]
  },
  dateCreated:{
    type:Date,
    default:Date.now()
  }
})
module.exports=mongoose.model("user",userSchema)
