import React, { Fragment } from 'react'
import Periodioco from './Periodico'

const PeriodicoList = ({periodicos}) => (
    <Fragment>
        { periodicos.map((periodico) => (
            <Periodioco 
                key={periodico.id}
                {...periodico}
            />
        ))}
    </Fragment>    
)


export default PeriodicoList