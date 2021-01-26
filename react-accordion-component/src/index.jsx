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
    this.handleDbClick=this.handleDbClick.bind(this)
  }

  handleClick(event){
    const $textContent=document.querySelectorAll("[data-view]")

    if(event.target.matches("#html")){
      for (let i =0; i<$textContent.length;i++){
        if($textContent[i].getAttribute("id")==="html-content"){
          $textContent[i].className="row"

        }else {
          $textContent[i].className="row hidden"
        }
      }
    } else if(event.target.matches("#css")){
      for (let i = 0; i < $textContent.length; i++) {
        if ($textContent[i].getAttribute("id") === "css-content") {
          $textContent[i].className = "row"

        } else {
          $textContent[i].className = "row hidden"
        }
      }

    } else if(event.target.matches("#js")){
      for (let i = 0; i < $textContent.length; i++) {
        if ($textContent[i].getAttribute("id") === "js-content") {
          $textContent[i].className = "row"

        } else {
          $textContent[i].className = "row hidden"
        }
      }
    }
  }

  handleDbClick(event){
    const $textContent=document.querySelectorAll("[data-view]")

    $textContent.forEach(node=>node.className="row hidden")
  }

  render(){
    return (
      <AccordionR content={content} handleClick={this.handleClick} handleDbClick={this.handleDbClick}/>
    )
  }
}

ReactDOM.render(
  <Accordion />,document.querySelector("#root")
)


function AccordionR(props){
  return (
    <div className="container">
      <div onClick={props.handleClick} onDoubleClick={props.handleDbClick} id="html" className="row cursor">
        <h2 id="html">Hypertext Markup Language</h2>
      </div>
      <div data-view="html" id="html-content" className="row hidden">
        <p>{props.content[0].text}</p>
      </div>
      <div onClick={props.handleClick} onDoubleClick={props.handleDbClick} id="css" className="row cursor">
        <h2 id="css">Cascading Style Sheets</h2>
      </div>
      <div data-view="css" id="css-content" className="row hidden">
        <p>{props.content[1].text}</p>
      </div>
      <div onClick={props.handleClick} onDoubleClick={props.handleDbClick} id="js" className="row cursor">
        <h2 id="js">JavaScript</h2>
      </div>
      <div data-view="js" id="js-content" className="row hidden">
        <p>{props.content[2].text}</p>
      </div>
    </div>
  )
}
