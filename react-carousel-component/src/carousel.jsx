import React from "react"

class Carousel extends React.Component{
  constructor(props){
    super(props)
    this.state={imageId:null}
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(shownImageId){

  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div>
            <img>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel
