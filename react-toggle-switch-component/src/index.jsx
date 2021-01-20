import React from "react"
import ReactDOM from "react-dom"

class ToggleSwitch extends React.Component{
  constructor(props){
    super(props)
    this.handleSwitch=this.handleSwitch.bind(this)
    this.state={switch:0}
  }

  handleSwitch(){
    this.setState({switch: this.state.switch +1})
  }

  render(){
    const toggle=this.state.switch
    if(toggle % 2===0){
      return (
        <label>
          <input type="checkbox" />
          <i onClick={this.handleSwitch} class="fas fa-toggle-on"></i>
          <h3>ON</h3>
        </label>
      )
    }else{
      return (
        <label>
          <input type="checkbox"/>
          <i onClick={this.handleSwitch} class="fas fa-toggle-off"></i>
          <h3>OFF</h3>
        </label>
      )
    }
  }
}

ReactDOM.render(
  <ToggleSwitch />,document.querySelector("#root")
)
