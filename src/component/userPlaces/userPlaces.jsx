import React, {useEffect, useState} from 'react'
import UserPlaceItem from '../userPlacesItem/userPlacesItem'
import {useParams} from 'react-router-dom'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import ErrorModel from '../errorModel/errorModel'
import Axios from 'axios'

import './userPlaces.css' 


const Places =()=>{
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [error, setError] = useState ()
    const [loadedPlace, setLoadedPlace] = useState ()
   
  const  userId = useParams().uid

  const res = async ()=>{
    setLoadingSpinner(true)
    try {
        const response = await fetch(`http://localhost:5000/api/places/users/${userId}`, {
        method : 'GET',
    }) 

    const responseData = await response.json()
    setLoadedPlace(responseData.places)
    setError(responseData.message)
    console.log(responseData)

    setLoadingSpinner(false)


    } catch (error) {
        console.log(error.message)
        setLoadingSpinner(false)
    }
  }

  useEffect(()=>{
    res()
  },[userId])

  const handleError = ()=>{
    setError(null)
    console.log('this is an error message')
}


    const deletedHandler =(deletedPlaceId) =>{
        setLoadedPlace(prevPlaces => 
        prevPlaces.filter(place => place.id !== deletedPlaceId))
    }

    
    
    return(
        <div className="userplace">
             {error && (
            <ErrorModel error ={error} onCancel={handleError}/>
        )}


        {loadingSpinner && (
            <LoadingSpinner/>
        )}

        
        <div className="userPlaceBox">
            {
        
             !loadingSpinner && loadedPlace && loadedPlace.map(data => 
             <UserPlaceItem data={data} key={data.id} id={data.id} onDelete={deletedHandler}/>) 
            
            }
        </div>        </div>
    )
}

export default Places