import React from 'react'
import {useParams} from "react-router-dom";
import Loading from '../components/Loading'
import FatalError from './500'
import Periodico from './Periodico'
import useFetch from '../hooks/useFetch'
import urls from '../config'
const PeriodicoContainer = () => {
    const { id } =useParams()
    const { data, loading, error } = useFetch(`${urls.urlPeriodico}top-headlines?apiKey=${urls.llave}&sources=${id}`)
    
    if(loading)
        return <Loading />
            
    if(error)
        return <FatalError />

    return <Periodico
        data={data.articles}            
    />

}

export default PeriodicoContainer