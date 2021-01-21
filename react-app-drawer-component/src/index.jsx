import React from "react"
import ReactDOM from "react-dom"

class AppDrawer extends React.Component{
  constructor(props){
    super(props)
    this.state={navClicked:false}
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(event){
    if (event.target.matches("#navicon")){
      this.setState({navClicked:true})
    }else if (event.target.matches("#overlay")||event.target.matches("#link")){
      this.setState({navClicked:false})
    }
  }

  render(){
    const navClicked=this.state.navClicked

    if(!navClicked){
      return (
        <div className="navicon">
          <i id="navicon" onClick={this.handleClick} className="fas fa-bars"></i>
        </div>
      )
    }else if(navClicked) {
      return(
        <div onClick={this.handleClick} id="overlay" className="overlay">
          <div className="navbar">
            <h1>Menu</h1>
            <div className="links">
              <div className="linkdiv">
                <a onClick={this.handleClick} href="#" id="link" className="link">About</a>
              </div>
              <div className="linkdiv">
                <a onClick={this.handleClick} href="#" id="link" className="link">Get Started</a>
              </div>
              <div className="linkdiv">
                <a onClick={this.handleClick} href="#" id="link" className="link">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

ReactDOM.render(
  <AppDrawer />,document.querySelector("#root")
)
