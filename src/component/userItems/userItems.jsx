import React, {useContext} from 'react' 
import {Link} from 'react-router-dom'
import {AuthContext } from '../AuthContext/AuthContext'

import './userItems.css'

const UserItems = ({data,place })=>{
    const  {name,id, image, email, } = data
    
       
    return (
<>
       <Link to={`/${id}/places`} className ='link'> 
        <div className="userItems">


            <div className="placeImg"
            // style={{
            //     backgroundImage: `url(http://localhost:4000/${image})`
            // }} 
            >
                <img src={`https://dan-chatapp.herokuapp.com/${image}`} alt="..."/>
            </div>

            <div className="placeText">
            <div className="name">{name}</div>
            <div className="name">{email}</div>
            <div className="name">{place} post</div>

            
            </div>
            
        </div>
        </Link>
        </>
    )
}

export default UserItems