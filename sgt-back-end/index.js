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
  isNaN(req.body.score) === false && Number.isInteger(parseFloat(req.body.score)) &&
  req.body.score>0 && Object.keys(req.body).length===3){

    const sql=`
      insert into "grades" ("name","course","score")
      values ('${req.body.name}', '${req.body.course}', ${parseInt(req.body.score)})
      returning *
    `

    db.query(sql)
      .then(result=>{
        const grade = result.rows[0]
        res.status(201).json(grade)
      })

      .catch(err=>{
        res.status(500).json({error: "An unexpected error occurred."})
      })

  } else {
    res.status(400).json({error: "Please check inputs"})
  }
})


app.put("/api/grades/:gradeId",(req,res)=>{
  if ("name" in req.body && "course" in req.body && "score" in req.body &&
  isNaN(req.body.score) === false && Number.isInteger(parseFloat(req.body.score)) &&
  req.body.score > 0 && Object.keys(req.body).length === 3 && isNaN(req.params.gradeId) === false &&
  req.params.gradeId > 0 && Number.isInteger(parseFloat(req.params.gradeId))){

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
        const grade = result.rows[0]

        if(!grade){
          res.status(404).json({error: `Cannot find grade with gradeId ${gradeId}`})

        } else{
          res.status(200).json(grade)
        }
      })

      .catch(err=>{
        res.status(500).json({error: "An unexpected error occurred."})
      })

  } else{
    res.status(400).json({error: "Please check inputs"})
  }
})






app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
