let app= require("./app.js")
let port=process.env.PORT || 6000


console.log(port)
app.listen(port,()=>{
    console.log("server is running at:",port)
})