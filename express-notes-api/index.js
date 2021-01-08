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
  let id = parseFloat(req.params.id)

  const idArr=[]
  for (const prop in notes) {
    idArr.push(parseInt(prop))
  }

  if (Number.isInteger(id)){
    if(Math.sign(id)===1){
      if(idArr.includes(id)){
        res.status(200).json(notes[id])

      } else {
        const err2 = {
          "error": `cannot find note with id ${id}`
        }
        res.status(404).json(err2)
      }

    } else {
      const err = {
        "error": "id must be a positive integer"
      }
      res.status(400).json(err)
    }

  } else {
    const err = {
      "error": "id must be a positive integer"
    }
    res.status(400).json(err)
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


app.delete("/api/notes/:id",(req,res)=>{
  let id = parseFloat(req.params.id)

  const idArr = []
  for (const prop in notes) {
    idArr.push(parseInt(prop))
  }

  if (Number.isInteger(id)) {
    if (Math.sign(id) === 1) {
      if (idArr.includes(id)) {
        delete notes[id]

        fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
          if (err) {
            console.error(err)
          }
        })

        res.sendStatus(204)

      } else {
        const err2 = {
          "error": `cannot find note with id ${id}`
        }
        res.status(404).json(err2)
      }

    } else {
      const err = {
        "error": "id must be a positive integer"
      }
      res.status(400).json(err)
    }

  } else {
    const err = {
      "error": "id must be a positive integer"
    }
    res.status(400).json(err)
  }
})











app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
