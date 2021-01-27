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
        {
          this.props.images.map(image=>{

            return (
              <div className="row">
                <div>
                  <img src={image.path} alt="pokemon"/>
                </div>
                <div className="dots">
                  <i class="far fa-circle"></i>
                </div>
                <div className="left-arrow">
                  <i class="fas fa-angle-left"></i>
                </div>
                <div className="right-arrow">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Carousel
