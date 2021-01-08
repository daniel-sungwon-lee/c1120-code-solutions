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

  if (Math.sign(id)===-1)
  notes[req.params.id]
})















app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
