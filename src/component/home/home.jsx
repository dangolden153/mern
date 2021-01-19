import React, {useState} from 'react'
import Backdrop from '../backdrop/backdrop'
import Button from '../customButton/button'
import UserPlaceItem from '../userPlacesItem/userPlacesItem'
import vidBg from '../pics/video.mp4'
import svgArrow from '../pics/down-arrow.svg'
import {motion, AnimatePresence} from 'framer-motion'
import './home.css'

const variantContainer ={
    initial:{
        opacity:0,
        x:"100vw"
    },
    animate:{
        opacity:1,
        x:0,
        transition:{duration: 2, delay: 1, ease: "easeIn"}
    },
   
}

const variantText ={
    initial:{
        opacity:0,
        x:"-100vw"
    },
    animate:{
        opacity:1,
        x:0,
        transition:{duration: 4, delay: 5, 
            ease: "easeIn", type: "spring", stiffness: "120"}
    },
    

}

const variantP ={
    initial:{
        opacity:0,
        y:"-100vh",
        transition:{duration: 1,
            ease: "easeOut"}
  
    },
    animate:{
        opacity:1,
        y:0,
        transition:{duration: 2, delay: 1,
            ease: "easeIn"}
    },
    

}

const variantSecP ={
    initial:{
        opacity:0,
        y:"-500px",
        transition:{duration: 2,
            ease: "easeOut"}
  
    },
    animate:{
        opacity:1,
        y:0,
        transition:{duration: 2, delay: 2,
            ease: "easeIn"}
    },
    

}


const HomePage =()=>{
    const [hideText, setHideText] = useState(true)
    

    const textHandler = ()=>setHideText(!hideText)

    return(
        <AnimatePresence exitBeforeEnter>
        <React.Fragment>
         <motion.div className="homePage_overall_container"
         variants={variantContainer}
         initial="initial"
         animate="animate"
         exit="exit"
         > 
        
        <div className="homepage">
            <div className="home_container">
            <div className="home_video_container">
                <video muted loop autoPlay>
                    <source src={vidBg}/>
                </video>
            </div>
            <div className="line_container">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <motion.div className="home_content_text"
            variants={variantText}
            initial="initial"
            animate="animate"
            >
                    <h1 className="home_content_header">
                    Lorem ipsum dolor sit amet.
                    </h1>


                    {hideText ? ( <motion.p className="home_content_paragh"
                    variants={variantP}
                    initial="initial"
                    animate="animate"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolorum, sapiente corrupti esse placeat animi architecto
                         sequi possimus beatae ad magnam.
                    </motion.p>)
                            :
                    ( <motion.p className="home_content_paragh"
                    variants={variantSecP}
                    initial="initial"
                    animate="animate"
                    >
                         ipsum dolor sit amet consectetur adipisicing elit.
                         Dolorum, sapiente corrupti esse placeat animi architecto
                         sequi possimus beatae ad magnam.
                    </motion.p>)}


                       {hideText ? <motion.button className="home_btn" onClick={textHandler}
                       whileHover ={{scale : 1.2, textShadow:" 0px 0px 8px rgb(255,255,255)"}}
                       transition={{type: 'spring', stiffness: '300'}}
                       >
                           <p className="home_content_paragh">read more</p>
                           <div className="btnSvg"
                           style={{
                               backgroundImage: `url(${svgArrow})`
                           }}
                           />
                         </motion.button>
                         :
                         <motion.button className="home_btn" onClick={textHandler}
                       whileHover ={{scale : 1.2, textShadow:" 0px 0px 8px rgb(255,255,255)"}}
                       transition={{ yoyo: 3 }}
                       >
                           <p className="home_content_paragh">read less</p>
                           <div className="btnSvg"
                           style={{
                               backgroundImage: `url(${svgArrow})`
                           }}
                           />
                         </motion.button>

                        }
                </motion.div>
       
                </div>

                <motion.p className="shine"
                animate ={{scale : 1.3, textShadow:" 0px 0px 8px rgb(255,255,255)", originZ: 0}}
                transition={{ yoyo: Infinity }}
                >just shine ...</motion.p>
        </div>
        
        </motion.div>  
        </React.Fragment>
   </AnimatePresence>
    )
}

export default HomePage