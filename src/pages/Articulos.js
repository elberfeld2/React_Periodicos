import React, { Fragment } from 'react'
import ArticuloList from '../components/ArticuloList'

const Articulos = ({data}) => (
    <Fragment>
        <div className="Row pt-3">
            <div className="col-12 d-flex justify-content-center">
                <h1>Periodicos en español</h1>
            </div>
        </div>
        <ArticuloList 
            articulo={data}
        />
    </Fragment>
)

export default Articulos