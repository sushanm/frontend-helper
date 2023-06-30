import React from 'react'
import "./Card.css"

function Card(props: any) {
    return (
        <div className="card" style={ props.isDisabled ? { pointerEvents:'none', opacity: '0.4'} : {}}>
            <div className="container" onClick={props.onClick}>
                <div className='card-header'>
                    <h4><b>{props.name}</b></h4>
                    {
                        props.isNew && <h4 className="new-badge">New</h4>
                    }
{
                        props.inProgess && <h4 className="in-progress-badge">In Progress</h4>
                    }
                </div>

                <div className='inner-container'>
                    <p>{props.description}</p>
                    <p className='card-icon'>{props.icon}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
