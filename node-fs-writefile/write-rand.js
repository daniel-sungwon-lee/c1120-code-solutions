const fs = require("fs")

let data=Math.random()

fs.writeFile("random.txt",data,(err)=>{
  if (err){
    console.error(err)
    process.exit(1)
  }
})
