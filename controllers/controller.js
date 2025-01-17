let User=require("../models/usermodel.js")



exports.userregister=async(req,res)=>{
    try{
    let {name,email,password}=req.body

    if(!name || !email || !password){
        throw new Error("name , email and password are required")
    }


  let userexist=await User.findOne({email})

  if(userexist){
    throw new Error("user already exist")
  }
    const user=await User.create({name,email,password})
    res.status(201).json({msg:"user succesfully registered"})
}catch(err){
  console.log("error msg:",err)
  res.status(400).json("something went wrong")
}

}


exports.userlogin=async(req,res)=>{
  try{
let {email,password}=req.body

if(!email || !password){
  throw new Error("email and password must required")
}

let reguser=User.findOne({email})
if(email!==reguser.email && password!==reguser.password){
throw new Error("username and password is not matching")
}
res.status(200).json({userloggedin:"success"})
  }catch(err){
console.log("error msg:",err)
res.status(400).json({loggin:"failed"})
  }
}