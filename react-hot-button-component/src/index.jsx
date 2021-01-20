import React from "react"
import ReactDOM from "react-dom"

class HotButton extends React.Component{
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
    this.state = {counter:0}
  }

  handleClick(){
    this.setState({counter: this.state.counter +1})
  }

  render(){
    const counter=this.state.counter
    if (counter>=3 && counter<6){
      return <button onClick={this.handleClick} className="dark">Hot Button</button>

    } else if(counter>=6 && counter<9) {
      return <button onClick={this.handleClick} className="purple">Hot Button</button>

    } else if(counter>=9 && counter<12) {
      return <button onClick={this.handleClick} className="red">Hot Button</button>

    } else if(counter>=12 && counter<15) {
      return <button onClick={this.handleClick} className="orange">Hot Button</button>

    } else if(counter>=15 && counter<18) {
      return <button onClick={this.handleClick} className="yellow">Hot Button</button>

    } else {
      return <button onClick={this.handleClick} className="white">Hot Button</button>
    }
  }
}

ReactDOM.render(
  <HotButton />,document.querySelector("#root")
)
