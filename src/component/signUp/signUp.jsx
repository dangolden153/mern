import React,{useState, useContext} from 'react'
import axios from 'axios'
import {AuthContext } from '../AuthContext/AuthContext'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import ErrorModel from '../errorModel/errorModel'
import ImageUpload from '../ImageUpload/ImageUpload'
import FormInput from '../formInput/formInput'
import Button from '../customButton/button'
import {useHistory} from 'react-router-dom'

import './signUp.css' 

const SignUp = ()=>{
    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [error, setError] = useState ()
    const [errorModel, setErrorModel] = useState (false)
    const [file, setFile] =useState()
    const auth = useContext(AuthContext)

    // const imageSubmit = (e)=>{
    //     setFile(e.target.files[0])
    // }

    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        setLoadingSpinner(true)
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('image', file)

        axios.post("https://dan-chatapp.herokuapp.com/api/users/signup",
        formData )
        .then((response)=>{
            console.log(response)
            setLoadingSpinner(false)
            auth.login(response.data.userId, response.data.token )
            history.push('/')

        }).catch(error =>{
            console.log(error)
            setLoadingSpinner(false)
            setError(error.message || 'something went wrong, please try again')
            setErrorModel(true)
        })
}

const handleError = ()=>{
    setError(null)
    console.log('this is an error message')
}
    return (
        <div className="signup">

            {error && (
            <ErrorModel 
            show={error}
            error ={error} 
            onCancel ={handleError}
            footer={<Button danger onClick={handleError}>
                close
            </Button>}/>
        )}

        {loadingSpinner && (
            <LoadingSpinner/>
        )}


            <div className="signupContainer">
                <h3 className="formHeading">SIGN UP</h3>

            <FormInput
            className='input'
            id='name'
             type="text"
             label="name"
             value={name}
             onChange = {e => setName(e.target.value)}
             />
             
   
            <FormInput
            className='input'
            id='name'
             type="email"
             label="email"
             value={email}
             onChange = {e => setemail(e.target.value)}
             />
             

              {
                  !loadingSpinner && 
                  <ImageUpload 
                  id='image'
                  files={file} 
                  setFiles={setFile}
                    />
              }

              {/* <input 
              type="file"
              file="image"
              onChange={imageSubmit}
              /> */}

            <FormInput
            className='input'
            id='name'
             type="password"
             label="password"
             value={password}
             onChange = {e => setpassword(e.target.value)}
             />

              
            <div className="btn_Box">

              <Button 
              onClick={handleSubmit}
              className="btn signUpbtn">SIGN UP</Button>

            <Button to='/login' border className="btn signUpbtn">LOGIN</Button>

            </div>
              </div>
        </div>
    )
}

export default SignUp