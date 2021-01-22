import React from "react"
import ReactDOM from "react-dom"

const content=[
  {
    lang: "HTML",
    text: "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web."
  },
  {
    lang:"CSS",
    text: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
  },
  {
    lang:"JS",
    text:"JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
  }
]

class Accordion extends React.Component{
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
    this.state={display:"hidden"}
  }

  handleClick(event){
    if(event.target.matches("#html")){
      event.target.closest(".row").nextSibling.className="row"

    } else if(event.target.matches("#css")){
      event.target.closest(".row").nextSibling.className="row"

    } else if(event.target.matches("#js")){
      event.target.closest(".row").nextSibling.className="row"

    }
  }

  render(){
    return (
      <div className="container">
        <div onClick={this.handleClick} id="html" className="row cursor">
          <h2 id="html">Hypertext Markup Language</h2>
        </div>
        <div id="text" className="hidden">
          <p>{this.props.content[0].text}</p>
        </div>
        <div onClick={this.handleClick} id="css" className="row cursor">
          <h2 id="css">Cascading Style Sheets</h2>
        </div>
        <div id="text" className="hidden">
          <p>{this.props.content[1].text}</p>
        </div>
        <div onClick={this.handleClick} id="js" className="row cursor">
          <h2 id="js">JavaScript</h2>
        </div>
        <div id="text" className="hidden">
          <p>{this.props.content[2].text}</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Accordion content={content}/>,document.querySelector("#root")
)
