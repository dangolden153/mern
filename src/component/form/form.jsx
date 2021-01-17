import React, { useState } from 'react'
import Login from '../login/login'
import SignUp from '../signUp/signUp'
import Button from '../customButton/button'

import './form.css'



const Form = ()=>{
    const [state, setState] = useState(true)

//    const setItems =()=>{
//        localStorage.setItem('setItems', true)
//    }

//    const getItems =()=>{
//    let data = localStorage.getItem('setItems')
//    console.log(data)
// }

    const toggle =()=>{
        setState(!state)
    }
    return(

        <React.Fragment>
         
        <div className="form">

       
            {
                state ? <Login/> : <SignUp/>
            }

            {/* <Button border  onClick={toggle} >
             {state ? 'SIGN IN' : 'LOGIN' }
            </Button> */}
         
         {/* <div>
            <button onClick={setItems}> set items</button>
            <button onClick={getItems}> get items</button>

         </div> */}
            
        </div>
        </React.Fragment>
    )
}

export default Form