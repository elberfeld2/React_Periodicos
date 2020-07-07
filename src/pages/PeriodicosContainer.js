import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Periodicos from './Periodicos'
import useFetch from '../hooks/useFetch'
import urls from '../config'

const PeriodicosContainer = () => {
    
    const { data, loading, error } = useFetch(`${urls.urlPeriodico}sources?apiKey=${urls.llave}&language=es`)
    
    if(loading)
        return <Loading />
            
    if(error)
        return <FatalError />

    return <Periodicos
        data={data.sources}            
    />
}

export default PeriodicosContainer