import React from "react"
import ReactDOM from "react-dom"

class CustomButton extends React.Component {
  render (){
    return <button>{this.props.text}</button>
  }
}

const element = (
  <div>
    <CustomButton text="Button" />
    <CustomButton text="I" />
    <CustomButton text="Am" />
  </div>
)

ReactDOM.render(element,document.querySelector("#root"))
