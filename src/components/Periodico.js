import React from 'react'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/periodico.png'
import { Link } from 'react-router-dom'

import './styles/Card.css'

const Periodico = ({ id,name, description, img, leftColor, rightColor }) => (
    
    <div className="card mx-auto Fitness-Card"
    style={{
        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}) `
    }}
    >
        <div className="card-body">
            <div className="row center">
                <div className="col-3">
                    <img src={img || emptyImg} className="float-right w-75" alt="exercise"/>
                </div> 
                <div className="col-9 Fitness-Card-Info">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <Link to={`/${id}`}>
                        Ver mas
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Periodico