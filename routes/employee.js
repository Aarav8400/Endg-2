const mongoose=require("mongoose")
const plm=require("passport-local-mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/testing")


const employeeSchema=mongoose.Schema({
  username:String,
  password:String,
  secret:String

})
employeeSchema.plugin(plm)
module.exports=mongoose.model("employee",employeeSchema)