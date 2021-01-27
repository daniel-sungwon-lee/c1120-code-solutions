import React from "react"
import ReactDOM from "react-dom"
import Accordion from "./accordion"

const content = [
  {
    id: 1,
    lang: "Hypertext Markup Language",
    text: "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web."
  },
  {
    id: 2,
    lang: "Cascading Style Sheets",
    text: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
  },
  {
    id: 3,
    lang: "JavaScript",
    text: "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
  }
]

ReactDOM.render(
  <Accordion content={content} />, document.querySelector("#root")
)
