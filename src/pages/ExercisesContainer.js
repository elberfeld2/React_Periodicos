import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Exercises from './Exercises'
import useFetch from '../hooks/useFetch'
import urls from '../config'

const ExercisesContainer = () => {
    const { data, loading, error } = useFetch(`${urls.url}/exercises`)

    if(loading)
        return <Loading />
            
    if(error)
        return <FatalError />

    return <Exercises
        data={data}            
    />
}

export default ExercisesContainer