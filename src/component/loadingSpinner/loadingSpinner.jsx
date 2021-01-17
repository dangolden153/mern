import React from 'react'
import ReactDOM from 'react-dom'
import {motion} from 'framer-motion'
import './loadingSpinner.css'
import Backdrop from '../backdrop/backdrop'


    const loaderVariants ={
        animationOne:{
            x:[-20, 20],
            y:[0, -30],
            transition :{
                x :{
                    yoyo :Infinity,
                    duration: 0.5
                },
                y :{
                    yoyo :Infinity,
                    duration: 0.25,
                    ease : "easeOut"
                },
            }
        },
        
    }

    const LoadingSpinner  =props=>{
    const spinnerContent =(
      
        <React.Fragment>
        <Backdrop show={props.show}/>
        <motion.div className="spinnerContainer"
        variants={loaderVariants}
        animate="animationOne"
        >
        <div className="spinner"></div>
        </motion.div>
        </React.Fragment>
    )

return ReactDOM.createPortal(spinnerContent, document.getElementById('spinner-hook'))

    
}

export default LoadingSpinner