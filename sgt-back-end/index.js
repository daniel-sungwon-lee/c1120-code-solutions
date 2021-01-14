const express = require("express")
const app = express()

const pg = require("pg")
const db = new pg.Pool({
  connectionString: "postgres://dev:lfz@localhost/studentGradeTable"
})

app.use(express.json())

app.get("/api/grades",(req,res)=>{
  const sql = `
    select *
    from "grades"
  `

  db.query(sql)
    .then(result=>{
      const grades = result.rows
      res.status(200).json(grades)
    })

    .catch(err=>{
      res.status(500).json({error: "An unexpected error occurred."})
    })
})


app.post("/api/grades", (req, res) => {
  if ("name" in req.body && "course" in req.body && "score" in req.body &&
  !isNaN(req.body.score) && Number.isInteger(parseFloat(req.body.score)) &&
  req.body.score>0 && req.body.score<=100 && Object.keys(req.body).length===3){

    const sql=`
      insert into "grades" ("name","course","score")
      values ('${req.body.name}', '${req.body.course}', ${parseInt(req.body.score)})
      returning *
    `

    db.query(sql)
      .then(result=>{
        const newRow = result.rows[0]
        res.status(201).json(newRow)
      })

      .catch(err=>{
        res.status(500).json({error: "An unexpected error occurred."})
      })

  } else {
    res.status(400).json({error: "Please check inputs"})
  }
})


app.put("/api/grades/:gradeId",(req,res)=>{
  if (isNaN(req.params.gradeId) || req.params.gradeId <= 0 ||
  !Number.isInteger(parseFloat(req.params.gradeId))){

    res.status(400).json({error: "gradeId must be a positive integer"})
    return
  }

  if ("name" in req.body && "course" in req.body && "score" in req.body &&
  !isNaN(req.body.score) && Number.isInteger(parseFloat(req.body.score)) &&
  req.body.score > 0 && req.body.score<=100 && Object.keys(req.body).length === 3){

    const gradeId = parseInt(req.params.gradeId)

    const sql = `
      update "grades"
      set "name"='${req.body.name}',
          "course"='${req.body.course}',
          "score"='${req.body.score}'
      where "gradeId"= $1
      returning *
    `

    const value = [gradeId]

    db.query(sql,value)
      .then(result=>{
        const updatedRow = result.rows[0]

        if(!updatedRow){
          res.status(404).json({error: `Cannot find grade with gradeId ${gradeId}`})

        } else{
          res.status(200).json(updatedRow)
        }
      })

      .catch(err=>{
        res.status(500).json({error: "An unexpected error occurred."})
      })

  } else{
    res.status(400).json({error: "Please check inputs"})
  }
})


app.delete("/api/grades/:gradeId",(req,res)=>{
  if (isNaN(req.params.gradeId) || req.params.gradeId <= 0 ||
    !Number.isInteger(parseFloat(req.params.gradeId))) {

    res.status(400).json({ error: "gradeId must be a positive integer" })
    return
  }

  const gradeId=parseInt(req.params.gradeId)

  const sql = `
  delete from "grades"
  where "gradeId"=$1
  returning *
  `

  const value = [gradeId]

  db.query(sql,value)
    .then(result=>{
      const deletedRow=result.rows[0]

      if(!deletedRow){
        res.status(404).json({error: `Cannot find grade with gradeId ${gradeId}`})

      } else{
        res.status(204).json(deletedRow)
      }
    })

    .catch(err=>{
      res.status(500).json({error: "An unexpected error occurred."})
    })
})



app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
