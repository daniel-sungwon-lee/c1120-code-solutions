const express = require("express")
const app = express()

const path = require("path")

const absPath=path.join(__dirname,"public")

const files = express.static(absPath)

app.use(files)

app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
