import React,{useState, useContext} from 'react'
import {AuthContext } from '../AuthContext/AuthContext'

import './login.css' 

const Login = ()=>{
    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const auth = useContext(AuthContext)

    const handleSubmit = ()=> {
        console.log(email)
        console.log(password)
        setemail('')
        setpassword('')
        auth.login()
    }

    return (
        <div className="signup">

            <div className="signupContainer loginContainer">
                <h3 className="formHeading">Login required</h3>
            <div className="inputContainer">
           <label htmlFor="name">Email</label>
            <input
            className='input'
            id='name'
             type="text"
             value={email}
             onChange = {e => setemail(e.target.value)}
             />
              </div>

            <div className="inputContainer">

           <label htmlFor="password">password</label>
            <input
            className='input'
            id='password'
             type="password"
             value={password}
             onChange = {e => setpassword(e.target.value)}
             />

              </div>

              <button 
              className="btn signUpbtn" 
              onClick={handleSubmit}>Login</button>
              </div>
        </div>
    )
}

export default Login