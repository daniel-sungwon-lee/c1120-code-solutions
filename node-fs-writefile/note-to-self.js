const fs = require("fs")

fs.writeFile("note.txt", process.argv[2] + "\n", (err)=>{
  if (err){
    console.error(err)
    process.exit(1)
  }
})
