import React,{useContext,useState, useEffect,} from 'react'
import {AuthContext } from '../AuthContext/AuthContext'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import ErrorModel from '../errorModel/errorModel'
import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'
import './updatePlace.css'

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
        axios.get(`http://localhost:5000/api/places/${placeId}`)
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
        
            const response = await fetch(`http://localhost:5000/api/places/${placeId}`,{
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
        
        {error && (
            <ErrorModel error ={error} onCancel={handleError}/>
        )}

        {loadingSpinner && (
            <LoadingSpinner/>
        )}

        <div className="signup">
            <div className="signupContainer loginContainer">
                <h3 className="formHeading">update place</h3>
            <div className="inputContainer">
           <label htmlFor="title">Title</label>
            <input
            className='input'
            id='title'
             type="text"
             value={title}
             onChange = {e => setTitle(e.target.value)}
             />
              </div>

            <div className="inputContainer">

           <label htmlFor="description">Description</label>

           <textarea 
           className='input '
           name="description" 
           id="description" cols="20" 
           rows="7"
           value={description}
             onChange = {e => setdescription(e.target.value)}
           />
            
              </div>

              <button 
              className="btn signUpbtn" 
              onClick={handleSubmit}>update place</button>
              </div>
        </div>
    </div>
)

}

export default UpdatePlace