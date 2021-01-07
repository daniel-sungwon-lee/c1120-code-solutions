const express = require("express")
const app = express()

let nextId=1
const grades={}

app.get("/api/grades",(req,res)=>{
  let arr = []

  for (const prop in grades){
    arr.push(grades[prop])
  }

  res.json(arr)
})

app.use(express.json())

app.post("/api/grades",(req,res)=>{
  let newGrades=req.body
  newGrades.id=nextId
  grades[nextId]=newGrades
  ++nextId
  res.status(201).send(newGrades)
})

app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
