import React,{useState, useContext} from 'react'
import {AuthContext } from '../AuthContext/AuthContext'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import ErrorModel from '../errorModel/errorModel'
import {useHistory} from 'react-router-dom'
import Button from '../customButton/button'
import FormInput from '../formInput/formInput'
import axios from 'axios'

import './login.css' 

const Login = ()=>{
    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [error, setError] = useState ()
    

    const auth = useContext(AuthContext)
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        
         
        setLoadingSpinner(true)
        axios.post("http://localhost:5000/api/users/login",{
            email : email,
            password : password
        })
        .then((response)=>{
            console.log(response)
            setLoadingSpinner(false)
            auth.login(response.data.userId, response.data.token)
            history.push('/user')

        }).catch(error =>{
            console.log(error)
            setLoadingSpinner(false)
            setError('something went wrong, please try again and make use of a valid email and password')
        })
}

const handleError = ()=>{
    setError(null)

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
            <LoadingSpinner show={loadingSpinner}/>
        )}

            <div className="signupContainer loginContainer">
                <h3 className="formHeading">LOGIN</h3>
            <FormInput
            className='input'
            id='name'
            label='email'
             type="text"
             value={email}
             onChange = {e => setemail(e.target.value)}
             />
            

            <FormInput
            className='input'
            id='password'
             type="password"
             label="password"
             value={password}
             onChange = {e => setpassword(e.target.value)}
             />

            
                <div className="btn_Box">
              <Button 
              className="btn signUpbtn" 
              onClick={handleSubmit}>LOGIN</Button>

                <Button border to='/sign'
              className="btn signUpbtn" 
              >SIGN UP</Button>
                </div>
              </div>
              </div>
    )
}

export default Login