import React from "react"

class Carousel extends React.Component{
  constructor(props){
    super(props)
    this.state={imageId:1}

    this.handleRightClick=this.handleRightClick.bind(this)
    this.handleLeftClick=this.handleLeftClick.bind(this)
    this.handleDotClick=this.handleDotClick.bind(this)
  }

  componentDidMount(){
    setInterval(()=>{
      if (this.state.imageId<this.props.images.length){
        this.setState({imageId:this.state.imageId+1})
      }else{
        this.setState({imageId:1})
      }
    },3000)
  }

  handleRightClick(id){
    if (id<this.props.images.length){
      this.setState({imageId:id +1})
    }else {
      this.setState({imageId:1})
    }
  }

  handleLeftClick(id){
    if (id===1){
      this.setState({imageId:this.props.images.length})
    }else {
      this.setState({imageId:id-1})
    }
  }

  handleDotClick(id){
    this.setState({imageId:id})
  }

  render(){
    return (
      <div className="container">
        {
          this.props.images.map(image=>{
            let rowClass="row hidden"

            if (this.state.imageId===image.id){
              rowClass="row"
            }
            return (
              <div className={rowClass}>
                <div>
                  <img src={image.path} alt="pokemon"/>
                </div>
                <div className="dots">
                  {
                    this.props.images.map(image=>{
                      let dotClass="far fa-circle"

                      if (this.state.imageId===image.id){
                        dotClass="fas fa-circle"
                      }
                      return (
                        <i onClick={()=>this.handleDotClick(image.id)} class={dotClass}></i>
                      )
                    })
                  }
                </div>
                <div onClick={()=>this.handleLeftClick(image.id)} className="left-arrow">
                  <i class="fas fa-angle-left"></i>
                </div>
                <div onClick={()=>this.handleRightClick(image.id)} className="right-arrow">
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
