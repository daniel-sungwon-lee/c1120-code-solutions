const express = require("express")
const app = express()

const fs = require("fs")

const data = require("./data.json")
let {nextId,notes}=data

app.use(express.json())

app.get("/api/notes",(req,res)=>{
  let notesArr = []

  for (const prop in notes){
    notesArr.push(notes[prop])
  }

  res.status(200).json(notesArr)
})

app.get("/api/notes/:id",(req,res)=>{
  if (isNaN(req.params.id) === false && req.params.id > 0 && Number.isInteger(parseFloat(req.params.id))){
    let id = parseInt(req.params.id)

    const idArr=[]
    for (const prop in notes) {
      idArr.push(parseInt(prop))
    }

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
})


app.post("/api/notes",(req,res)=>{
  if(req.body.hasOwnProperty("content")) {
    let newNote = new Object()
    newNote.content = req.body.content

    newNote.id=parseInt(nextId)

    notes[nextId]=newNote
    data.nextId= ++nextId

    fs.writeFile("data.json",JSON.stringify(data,null,2),(err)=>{
      if (err) {
        const err500={"error": "An unexpected error occured"}
        res.status(500).json(err500)
      }
    })

    res.status(201).json(newNote)

  } else {
    const err = {
      "error": "content is a required field"
    }

    res.status(400).json(err)
  }
})


app.delete("/api/notes/:id",(req,res)=>{
  if (isNaN(req.params.id) === false && req.params.id > 0 && Number.isInteger(parseFloat(req.params.id))){
    let id = parseFloat(req.params.id)

    const idArr = []
    for (const prop in notes) {
      idArr.push(parseInt(prop))
    }

    if (idArr.includes(id)) {
      delete notes[id]

      fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) {
          const err500 = { "error": "An unexpected error occured" }
          res.status(500).json(err500)
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
})


app.put("/api/notes/:id",(req,res)=>{
  if (req.body.hasOwnProperty("content")) {
    if (isNaN(req.params.id) === false && req.params.id > 0 && Number.isInteger(parseFloat(req.params.id))) {
      let id = parseFloat(req.params.id)

      const idArr = []
      for (const prop in notes) {
        idArr.push(parseInt(prop))
      }

      if (idArr.includes(id)) {
        let updatedNote=new Object()
        updatedNote.content=req.body.content

        updatedNote.id = id
        notes[id] = updatedNote

        fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
          if (err) {
            const err500 = { "error": "An unexpected error occured" }
            res.status(500).json(err500)
          }
        })

        res.status(200).json(updatedNote)

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
    const errContent = {
      "error": "content is a required field"
    }

    res.status(400).json(errContent)
  }
})



app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
