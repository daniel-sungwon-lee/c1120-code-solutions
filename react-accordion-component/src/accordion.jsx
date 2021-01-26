import React from "react"

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state={openId:null}
    this.handleClick = this.handleClick.bind(this)
    this.handleDbClick = this.handleDbClick.bind(this)
  }

  handleClick(clickedId) {
    this.setState({openId:clickedId})
  }

  handleDbClick() {
    this.setState({openId:null})
  }

  render() {
    return (
      <div className="container">
        {
          this.props.content.map(obj=>{
            let contentClass="row hidden"
            if(this.state.openId===obj.id){
              contentClass="row"
            }
            return (
              <div onClick={()=>this.handleClick(obj.id)} onDoubleClick={this.handleDbClick}>
                <div className="row cursor">
                  <h2>{obj.lang}</h2>
                </div>
                <div className={contentClass}>
                  <p>{obj.text}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Accordion
