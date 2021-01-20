import React, {useEffect, useState, useContext} from 'react'
import UserPlaceItem from '../userPlacesItem/userPlacesItem'
import {AuthContext } from '../AuthContext/AuthContext'
import {useParams} from 'react-router-dom'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import ErrorModel from '../errorModel/errorModel'
import Button from '../customButton/button'
import Axios from 'axios'

import './userPlaces.css' 


const Places =()=>{
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [error, setError] = useState ()
    const [loadedPlace, setLoadedPlace] = useState ()
   
    const auth = useContext(AuthContext)
  const  userId = useParams().uid

  const res = async ()=>{
    setLoadingSpinner(true)
    try {
        const response = await fetch(`https://dan-chatapp.herokuapp.com/api/places/users/${userId}`, {
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
            <ErrorModel error ={error} 
            footerClass="footerBtn"
            footer={
            <div>
                <Button inverse onClick={handleError}>close</Button>
                <Button to='/place/new'>create a post</Button> 
            </div> }/>
        )}


        {loadingSpinner && (
            <LoadingSpinner onClick={handleError}/>
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