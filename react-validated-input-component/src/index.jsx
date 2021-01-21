import React from "react"
import ReactDOM from "react-dom"

class ValidatedInput extends React.Component{
  constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.state={password:"", pass:false, message:"A password is required"}
  }

  handleChange(event){
    this.setState({password: event.target.value})
    if(event.target.value.length<8){
      this.setState({pass:false, message:"Your password is too short"})
    } else if(event.target.value.length>=8){
      this.setState({pass:true, message:""})
    }
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("password:",this.state.password)
  }

  render(){
    const pass = this.state.pass
    if (!pass){
      return(
        <form onSubmit={this.handleSubmit}>
          <label for="password">Password</label>
          <div className="text">
            <input onChange={this.handleChange} type="password" id="password" value={this.state.password} minlength="8" required/>
            <i class="fas fa-times"></i>
          </div>
          <p>{this.state.message}</p>
        </form>
      )
    } else if(pass){
      return(
        <form onSubmit={this.handleSubmit}>
          <label for="password">Password</label>
          <div className="text">
            <input onChange={this.handleChange} type="password" id="password" value={this.state.password} minlength="8" required/>
            <i class="fas fa-check"></i>
          </div>
          <p>{this.state.message}</p>
        </form>
      )
    }
  }
}

ReactDOM.render(
  <ValidatedInput />,document.querySelector("#root")
)
