import React from 'react'
import "./Card.css"

class CardContainer extends React.Component {
  render() {
    return (
      <div className="card" >
        <h2 className='card-title'>{this.props.title}</h2>

        <div className="container2">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CardContainer
