import React from 'react'
import "./Card.css"

function Card(props:any) {
    return (
        <div className="card" onClick={props.onClick}>
            <div className="container">
                <h4><b>Jane Doe</b></h4>
                <p>Interior Designer</p>
            </div>
        </div>
    )
}

export default Card
