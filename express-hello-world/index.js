const express = require("express")
const app = express()

app.use((req,res)=>{
  req.method
  res.send("Hello World")
})

app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
