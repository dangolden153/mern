import React from 'react'
import ReactDOM from 'react-dom' 

import "./backdrop.css"

const Backdrop = props =>{
    const backcontent =(
        <div className="backdrop" onClick={props.onClick}>
            
        </div>
    )
    return ReactDOM.createPortal(backcontent, document.getElementById('backdrop-hook'))
}

export default Backdrop