import React, { Fragment } from 'react'
import ArticuloList from '../components/ArticuloList'

const Periodicos = ({data}) => (
    <Fragment>
        <div className="Row pt-3">
            <div className="col-12 d-flex justify-content-center">
                <h1>{data[0].source.name}</h1>
            </div>
        </div>
        <ArticuloList 
            articulos={data}
        />
    </Fragment>
)

export default Periodicos