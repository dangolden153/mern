import React,{useContext,useState, useEffect,} from 'react'
import {AuthContext } from '../AuthContext/AuthContext'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import ErrorModel from '../errorModel/errorModel'
import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'
import {motion} from 'framer-motion'
import Button from '../customButton/button'


import './updatePlace.css'



const variantContainer = {
    hidden: {opacity: 0, y: "-100vh"},
    visible: {opacity: 1, y:0 ,
    transistion: {duration: 2, ease: "easeIn" }
    }
}

const UpdatePlace = ()=>{


    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [error, setError] = useState ()

    const placeId = useParams().pid
    const history = useHistory()
    const auth = useContext(AuthContext)



    const res = ()=>{
        setLoadingSpinner(true)
        axios.get(`https://dan-chatapp.herokuapp.com/api/places/${placeId}`)
        .then(response =>{
            console.log(response)
            setTitle(response.data.place.title)
            setdescription((response.data.place.description))
            setLoadingSpinner(false)


        }) .catch(error =>{
            console.log(error)
            setLoadingSpinner(false)

        })
    }


    useEffect(()=>{
        res()
    },[placeId]) 

    const handleError = ()=>{
        setError(null)
        console.log('this is an error message')
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        try {
        
            const response = await fetch(`https://dan-chatapp.herokuapp.com/api/places/${placeId}`,{
                method : 'PATCH',
                body : JSON.stringify({
                    title : title,
                    description: description
                }),
                headers :{
                    'Content-Type' : 'application/json',
                    Authorization : 'Bearer ' + auth.token
                },
                
            })
            const responseData = await response.json()
            console.log(responseData.message)
            history.push(`/${auth.userId}/places`)
        }
        
        catch(err){}

    }

return (
    <div className="updatePlace">
        
        <motion.div className="addplace"
        variants={variantContainer}
        initial="hidden"
        animate="visible"
        exit="hidden"
        >

        {error && (
            <ErrorModel error={error} onCancel={handleError}/>
        )}

        {loadingSpinner && (
            <LoadingSpinner/>
        )}

            <div className="signupContainer">
                <h3 className="formHeading">Update Post</h3>
   
            
            <input
            className='input addPlace_input'
            id='title'
             type="text"
             value={title}
             onChange = {e => setTitle(e.target.value)}
             />
             

          
            <textarea 
           className='input addPlace_text'
           name="description" 
           id="description" cols="45" 
           rows="9"
           value={description}
             onChange = {e => setdescription(e.target.value)}
           />
          

              <Button buttonClass='addplace_btn' border
              onClick={handleSubmit}
              >Update Post</Button>
              </div>
       
              </motion.div>
    </div>
)

}

export default UpdatePlace