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






app.listen(3000,()=>{
  console.log("Listening on port 3000")
})
