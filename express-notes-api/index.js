const express = require("express")
const app = express()

const fs = require("fs")

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


app.use(express.json())

app.post("/api/notes",(req,res)=>{
  let newNote=req.body

  if (Object.keys(newNote).length===0){
    const err = {
      "error": "content is a required field"
    }

    res.status(400).json(err)

  } else if (Object.keys(newNote).length>0){
    newNote.id=parseInt(nextId)

    notes[nextId]=newNote
    data.nextId= ++nextId

    fs.writeFile("data.json",JSON.stringify(data,null,2),(err)=>{
      if (err) {
        console.error(err)
      }
    })

    res.status(201).json(newNote)
  }
})













app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
