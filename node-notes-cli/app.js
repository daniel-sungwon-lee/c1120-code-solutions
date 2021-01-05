const fs = require("fs")
const data = require("./data.json")
const keyword = process.argv[2]

let {nextId,notes}=data

switch(keyword){
  case "read":
    for (const[key,value] of Object.entries(notes)){
      console.log(`${key}: ${value}`)
    }
    break
  case "create":
    notes[nextId]=process.argv[3]
    data.nextId=++nextId
    fs.writeFile("data.json", JSON.stringify(data,null,2),(err)=>{
      if (err){
        console.error(err)
        process.exit(1)
      }
    })
    break
  case "update":
    notes[process.argv[3]]=process.argv[4]
    fs.writeFile("data.json",JSON.stringify(data,null,2),(err)=>{
      if (err){
        console.error(err)
        process.exit(1)
      }
    })
    break
  case "delete":
    break
}
