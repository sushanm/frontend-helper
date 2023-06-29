import React from 'react'
import "./Card.css"

function Card(props: any) {
    return (
        <div className="card" >
            <div className="container" onClick={props.onClick}>
                <h4><b>{props.name}</b></h4>
                <div className='inner-container'>
                <p>{props.description}</p>
                <p className='card-icon'>{props.icon}</p>
                </div>               
            </div>
        </div>
    )
}

export default Card
