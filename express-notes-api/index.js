const express = require("express")
const app = express()

const data = require("./data.json")
let {nextId,notes}=data


app.get("/api/notes",(req,res)=>{
  let notesArr = []

  for (const prop in notes){
    notesArr.push(notes[prop])
  }

  res.status(200).json(notesArr)
})

app.get("/api/notes/:id",(req,res)=>{
  let id = parseInt(req.params.id)

  const idArr=[]
  for (const prop in notes) {
    idArr.push(parseInt(prop))
  }

  if (Math.sign(id)===-1){
    const err = {
      "error":"id must be a positive integer"
    }
    res.status(400).json(err)

  } else if(idArr.includes(id)===false){
    const err = {
      "error": `cannot find note with id ${id}`
    }
    res.status(404).json(err)

  } else if (idArr.includes(id)===true){
    res.status(200).json(notes[id])
  }
})


api.post("/api/notes",(req,res)=>{

})













app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
