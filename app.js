require("dotenv").config()
let express= require("express")
let cors=require("cors")
let app=express()
console.log(process.env.MONGO_URL)

let connectToDb=require("./config/db.js")

connectToDb()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors())
let UserRouter=require("./routers/router.js")

app.use("/",UserRouter)




module.exports=app