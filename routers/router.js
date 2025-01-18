let express=require("express")

let {userregister,userlogin}=require("../controllers/controller.js")

const router=express.Router()

router.post("/registeruser",userregister)
router.post("/loggin",userlogin)



module.exports=router