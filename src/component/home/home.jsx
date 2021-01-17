import React from 'react'
import Backdrop from '../backdrop/backdrop'
import Button from '../customButton/button'
import vidBg from '../pics/video.mp4'
import svgArrow from '../pics/down-arrow.svg'
import './home.css'


const HomePage =()=>{

    return(
        <React.Fragment>
        <Backdrop/>
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
            <div className="home_content_text">
                    <h1 className="home_content_header">
                    Lorem ipsum dolor sit amet.
                    </h1>
                    <p className="home_content_paragh">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolorum, sapiente corrupti esse placeat animi architecto
                         sequi possimus beatae ad magnam.
                    </p>
                        <Button>
                           <p className="home_content_paragh">read on</p>
                           <div className="btnSvg"
                           style={{
                               backgroundImage: `url(${svgArrow})`
                           }}
                           />
                         </Button>
                </div>
</div>
        </div>
        </React.Fragment>
    )
}

export default HomePage