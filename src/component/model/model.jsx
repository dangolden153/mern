import React from 'react'
import ReactDOM from 'react-dom'
import Backdrop from '../backdrop/backdrop'
import {AnimatePresence, motion} from 'framer-motion'

import './model.css'

const model ={
    
    hidden :{
        y: "-100vh",
        opacity: 0,
   },

    vissible :{
        y: "7vh",
        opacity :1,
        transition:{duration: 0.5, ease: "easeOut"}
    },

}

const ModelContent = props =>{

    const content =( 
        <AnimatePresence exitBeforeEnter>
        <motion.div className={`model_content ${props.modelClass}`}
        variants={model}
       initial="hidden"
       animate="vissible"
       exit="hidden"
       >

            <header className={`model_header ${props.headerClass}`}>
               <h2>{props.header}</h2> 
            </header>

            <form 
            onSubmit={props.onSubmit ? props.onSubmit
             : event => event.preventDefault()} >

                 <div className={`model_children_content ${props.contentClass}` } >
                     {props.children}
                 </div>
            </form>

            <footer className={`model_footer ${props.footerClass}`} >
                {props.footer}
            </footer>
        </motion.div>
        </AnimatePresence>
    )

 return ReactDOM.createPortal(content, document.getElementById('model-hook'))
}
 
const Model = props =>{
    return(
        <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        
       {props.show && 
       <ModelContent {...props} />
     
       }
       </React.Fragment>
    
   )
}

export default Model