import React from "react"
import ReactDOM from "react-dom"

class ValidatedInput extends React.Component{
  constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.state={password:"", message:"A password is required", icon:"fas fa-times"}
  }

  handleChange(event){
    this.setState({password: event.target.value})
    if(event.target.value.length<8){
      this.setState({message:"Your password is too short", icon:"fas fa-times"})
    } else if(event.target.value.length>=8){
      this.setState({message:"", icon:"fas fa-check"})
    }
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("password:",this.state.password)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label for="password">Password</label>
        <div className="text">
          <input onChange={this.handleChange} type="password" id="password" value={this.state.password} minlength="8" required/>
          <i className={this.state.icon}></i>
        </div>
        <p>{this.state.message}</p>
      </form>
    )
  }
}

ReactDOM.render(
  <ValidatedInput />,document.querySelector("#root")
)
