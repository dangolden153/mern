import React, {useContext, useState} from 'react'
import ErrorModel from '../errorModel/errorModel'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import {AuthContext } from '../AuthContext/AuthContext'
import {useParams, useHistory} from 'react-router-dom'
import ImageUpload from '../ImageUpload/ImageUpload'
import Axios from 'axios'

import './addplace.css'



    const AddPlace = ()=>{

    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [error, setError] = useState ()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] =useState()

      
      const auth = useContext(AuthContext)  
      const history = useHistory()

    const handleSubmit = async event =>{
        event.preventDefault()
        
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', file)
        formData.append('creator', auth.userId)
        
       Axios.post("http://localhost:5000/api/places", formData, {
           headers :{
            Authorization : 'Bearer ' + auth.token
           }
       })
        .then(response=>{
            console.log(response)
            history.push(`/${auth.userId}/places`)
        })
        .catch(err=>{
            console.log(err)
        })
    } 

    const handleError = ()=>{
        setError(null)
    }

    return (
        <React.Fragment>
        <div className="addplace">
        
        <div className="signup">

        {error && (
            <ErrorModel error={error} onCancel={handleError}/>
        )}

        {loadingSpinner && (
            <LoadingSpinner/>
        )}


            <div className="signupContainer">
                <h3 className="formHeading">Add a new place</h3>
   
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

           <label htmlFor="description">description</label>
    
            <textarea 
           className='input '
           name="description" 
           id="description" cols="20" 
           rows="7"
           value={description}
             onChange = {e => setDescription(e.target.value)}
           />
             </div>

             {
                  !loadingSpinner && 
                  <ImageUpload 
                  id='image'
                  files={file} 
                  setFiles={setFile}
                    />
              }

              <button 
              onClick={handleSubmit}
              className="btn signUpbtn">Add place</button>
              </div>
        </div>
   
        </div>
        </React.Fragment>
     )
}

export default AddPlace