import React, { Fragment } from 'react'
import Articulo from './Articulo'

const ArticuloList = ({articulos}) => (
    <Fragment>
        { articulos.map((articulo,i) => (
            <Articulo 
                key={"K"+i}
                {...articulo}
            />
        ))}
    </Fragment>    
)


export default ArticuloList