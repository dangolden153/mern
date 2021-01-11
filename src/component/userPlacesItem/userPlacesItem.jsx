import React,{useState, useContext} from 'react'
import {AuthContext } from '../AuthContext/AuthContext'

import './userPlacesItem.css'

const UserPlaceItem = ({data})=>{
    const {description,title,name,image} = data

    const auth = useContext(AuthContext)


    if (!data || data === 0){
     return  <div>
            <h3>no user place found</h3>
           </div>
    }



    return(
        <div className="userPlaceItem">
            <div className="userPlaceItemBox">
            <div className="userPlaceImg"
            style={{
                backgroundImage : `url(${image})`
            }}
            />

            <div className="placeText">
            <div className="email">{name}</div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            </div>

            <div className="btnContainer">
                <button className="btn">view place</button>

                {auth.isLoggedIn && (
                <button className="btn">edit place</button>
                 )}

                 {auth.isLoggedIn && (
                <button className="btn">delete place</button>
                )}

            </div>
            </div>
        </div>
    )
}

export default UserPlaceItem