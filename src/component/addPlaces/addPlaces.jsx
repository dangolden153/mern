import React, {useContext, useState} from 'react'
import ErrorModel from '../errorModel/errorModel'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import {AuthContext } from '../AuthContext/AuthContext'
import {useParams, useHistory} from 'react-router-dom'
import ImageUpload from '../ImageUpload/ImageUpload'
import Button from '../customButton/button'
import Model from '../model/model'
import Axios from 'axios'
import {motion} from 'framer-motion'

import './addplace.css'


const variantContainer = {
    hidden: {opacity: 0, y: "-100vh"},
    visible: {opacity: 1, y:0 ,
    transistion: {duration: 2, ease: "easeIn" }
    }
}


    const AddPlace = ()=>{

    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [error, setError] = useState ()
    const [title, setTitle] = useState('please write a title...')
    const [description, setDescription] = useState(`whats's on your mind `)
    const [file, setFile] =useState()
    const [showModel, setShowModel] =useState(true)

     


      const auth = useContext(AuthContext)  
      const history = useHistory()

    const handleSubmit = async event =>{
        event.preventDefault()
        
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', file)
        formData.append('creator', auth.userId)
        setLoadingSpinner(true)
       Axios.post("http://localhost:5000/api/places", formData, {
           headers :{
            Authorization : 'Bearer ' + auth.token
           }
       })
        .then(response=>{
            console.log(response)
            history.push(`/${auth.userId}/places`)
            setLoadingSpinner(false)

        })
        .catch(err=>{
            console.log(err)
            setLoadingSpinner(false)

        })
    } 

    const handleError = ()=>{
        setError(null)
    }

    return (
        <React.Fragment>
            <div className="addPlace_container">

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
                <h3 className="formHeading">Create Post</h3>
   
            
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
             onChange = {e => setDescription(e.target.value)}
           />
          

             {
                  !loadingSpinner && 
                  <ImageUpload 
                  id='image'
                  files={file} 
                  setFiles={setFile} 
                    />
              }

              <Button buttonClass='addplace_btn' border
              onClick={handleSubmit}
              >Post</Button>
              </div>
       
              </motion.div>
        </div>
        </React.Fragment>
     )
}

export default AddPlace