import React from "react"
import ReactDOM from "react-dom"
import Carousel from "./carousel"

const images= [
  {
    id:1,
    name:"charizard",
    path: "../images/006.png"
  },
  {
    id:2,
    name: "venusaur",
    path:"../images/003.png"
  },
  {
    id:3,
    name:"blastoise",
    path:"../images/009.png"
  },
  {
    id:4,
    name:"gyarados",
    path:"../images/130.png"
  },
  {
    id:5,
    name:"mewtwo",
    path:"../images/150.png"
  },
  {
    id:6,
    name:"rayquaza",
    path:"../images/384.png"
  }
]

ReactDOM.render(
  <Carousel images={images}/>,document.querySelector("#root")
)
