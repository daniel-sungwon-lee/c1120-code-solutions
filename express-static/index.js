const express = require("express")
const app = express()

const path = require("path")

const absPath=path.join(__dirname,"public")

const files=app.use(express.static("public"))

app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
