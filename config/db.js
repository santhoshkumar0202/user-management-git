let mongoose=require("mongoose")

let connectToDb=()=>{

mongoose.connect(process.env.MONGO_URL)
.then((con)=>{console.log("db is successfully connected! :",con.connection.host)})
.catch((err)=>{
console.log("error msg:",err)
process.exit(1)
})
}

module.exports=connectToDb