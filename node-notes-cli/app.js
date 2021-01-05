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

    break
  case "update":
    break
  case "delete":
    break
}
