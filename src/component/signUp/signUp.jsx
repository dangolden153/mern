import React,{useState} from 'react'

import './signUp.css' 

const SignUp = ()=>{
    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    return (
        <div className="signup">

            <div className="signupContainer">
                <h3 className="formHeading">Sign up to become a User</h3>

            <div className="inputContainer">
           <label htmlFor="name">Name</label>
            <input
            className='input'
            id='name'
             type="text"
             value={name}
             onChange = {e => setName(e.target.value)}
             />
              </div>
   
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

           <label htmlFor="name">password</label>
            <input
            className='input'
            id='name'
             type="password"
             value={password}
             onChange = {e => setpassword(e.target.value)}
             />

              </div>

              <button className="btn signUpbtn">Sign Up</button>
              </div>
        </div>
    )
}

export default SignUp