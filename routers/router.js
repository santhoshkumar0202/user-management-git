let express=require("express")

let {userregister}=require("../controllers/controller.js")

const router=express.Router()

router.post("/registeruser",userregister)




module.exports=router