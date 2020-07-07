import React, { Fragment } from 'react'
import PeriodicoList from '../components/PeriodicoList'

const Periodicos = ({data}) => (
    <Fragment>
        <div className="Row pt-3">
            <div className="col-12 d-flex justify-content-center">
                <h1>Periodicos en español</h1>
            </div>
        </div>
        <PeriodicoList 
            periodicos={data}
        />
    </Fragment>
)

export default Periodicos