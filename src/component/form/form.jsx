import React, { useState } from 'react'
import Login from '../login/login'
import SignUp from '../signUp/signUp'

import './form.css'


const Form = ()=>{
    const [state, setState] = useState(true)

    const toggle =()=>{
        setState(!state)
    }
    return(
        <div className="form">
            {
                state ? <Login/> : <SignUp/>
            }

            <button className="btn formbtn" onClick={toggle}>
            SWITCH TO  {state ? 'sign up' : 'login' }
            </button>
        </div>
    )
}

export default Form