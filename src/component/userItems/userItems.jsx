import React from 'react'
import {Link} from 'react-router-dom'
import './userItems.css'

const UserItems = ({data : {name,id,places, image}})=>{
    return (
<>
        <Link to='/u1/places'>
        <div className="userItems">


            <div className="placeImg"
            style={{
                backgroundImage: `url(${image})`
            }}/>

            <div className="placeText">
            <div className="name">{name}</div>
            <div className="name">{places}</div>

            
            </div>
            
        </div>
        </Link>
        </>
    )
}

export default UserItems