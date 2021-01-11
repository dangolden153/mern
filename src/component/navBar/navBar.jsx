import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../AuthContext/AuthContext'

import './navBar.css'

const NavBar =()=>{

const auth = useContext(AuthContext)

    return(
        <nav className="navBox">
            <div className="placeHeading">
                my place
            </div>

            <ul className="navList">

         
            <Link to='/'  className='link'> <li className="navItems"> all user</li> </Link>
           

            {auth.isLoggedIn && (
            <Link to='/u2/places' className='link'><li className="navItems"> my place</li></Link>
            )}
            
            {auth.isLoggedIn && (
            <Link className='link' to='/addPlace' ><li className="navItems">add place</li></Link> 
            )}
            
            {!auth.isLoggedIn && (
            <Link to='/form'> <li className="navItems">authenticate</li></Link> 
            )}
            
            {auth.isLoggedIn && (
            <Link > <li className="navItems" onClick={auth.logout}>logout</li></Link> 
            )}           
            </ul>
        </nav>
    )
}

export default NavBar