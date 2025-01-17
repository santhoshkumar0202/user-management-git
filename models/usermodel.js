let mongoose= require("mongoose")


let userschema= new mongoose.Schema({
    name:{
  type:String,
  required:[true,"required to be filled name field"]
    },
    email:{
type:String,
unique:true,
required:[true,"email field is must be filled"]

    },
    password:{
        type:String,
        required:[true,"must fill the password before we proceed"]
        ,maxLength:[15,"password shouldn't be more than 15 chars"]
    }

})


module.exports=mongoose.model("User",userschema)