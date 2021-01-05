const fs = require("fs")

let data=Math.random()

fs.writeFile("random.txt",data + "\n",(err)=>{
  if (err){
    console.error(err)
    process.exit(1)
  }
})
