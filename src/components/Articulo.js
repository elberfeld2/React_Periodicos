import React from 'react'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/periodico.png'

import './styles/Card.css'

const Articulo = ({title, description,url, urlToImage, leftColor, rightColor }) => (
    
    <div className="card mx-auto Fitness-Card2"
    style={{
        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}) `
    }}
    >
        <div className="card-body">
            <div className="row center">
                <div className="col-8 Fitness-Card-Info">
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
                <div className="col-4">
                    <img src={urlToImage} className="float-right w-100" alt="exercise"/>
                </div> 
            </div>
        </div>
    </div>
)

export default Articulo