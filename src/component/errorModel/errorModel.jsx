import React from 'react'
import Model from '../model/model'
import './errorModel.css'

const ErrorModel = props=> {

    return(
        <React.Fragment>
       < Model 
       header ='Error has occured'
       footer ={props.footer }
       show={!!props.error}
       onCancel={props.onCancel} 
       >
       {props.error}
       </Model>

        </React.Fragment>
    )
}

export default ErrorModel