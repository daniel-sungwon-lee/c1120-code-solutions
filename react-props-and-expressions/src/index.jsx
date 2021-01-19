import React from "react"
import ReactDOM from "react-dom"

function CustomButton(props){
  return <button>{props.text}</button>
}

const element = (
  <div>
    <CustomButton text="This" />
    <CustomButton text="Is" />
    <CustomButton text="Button" />
  </div>
)

ReactDOM.render(
  element,document.querySelector("#root")
)
