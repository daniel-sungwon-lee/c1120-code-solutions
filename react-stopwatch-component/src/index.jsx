import React from "react"
import ReactDOM from "react-dom"

class Stopwatch extends React.Component{
  constructor(props){
    super(props)
    this.tick=this.tick.bind(this)
    this.play=this.play.bind(this)
    this.pause=this.pause.bind(this)
    this.clear=this.clear.bind(this)
    this.state = {start:false, counter:0}
  }

  tick(){
    this.setState({counter:this.state.counter+1})
  }

  play(){
    this.setState({start:true})
    this.timer=setInterval(()=>this.tick(),1000)
  }

  pause(){
    clearInterval(this.timer)
    this.setState({start:false})
  }

  clear(){
    this.setState({counter:0})
  }

  render(){
    const counter = this.state.counter
    const start= this.state.start

    if (!start){
      return (
        <div className="row">
          <div onClick={this.clear} className="watch">
            <h1>{counter}</h1>
          </div>
          <i onClick={this.play} class="fas fa-play"></i>
        </div>
      )
    } else if(start){
      return(
        <div className="row">
          <div className="watch">
            <h1>{counter}</h1>
          </div>
          <i onClick={this.pause} class="fas fa-pause"></i>
        </div>
      )
    }
  }
}

ReactDOM.render(
  <Stopwatch />,document.querySelector("#root")
)
