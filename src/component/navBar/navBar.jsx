import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../AuthContext/AuthContext'
import logo from '../pics/logo.svg'
import home from '../pics/home.svg'
import file from '../pics/files.svg'
import post from '../pics/add-file.svg'
import profile from '../pics/account.svg'

import './navBar.css'

const NavBar =()=>{

const auth = useContext(AuthContext)

    return( 
        <nav className="navBox">
            <Link to='/'  className='link'> <div className="placeHeading"> <div className="navSvgHeading"
                 style={{
                     backgroundImage : `url(${logo})`
                 }}
                 /></div> </Link>


            <ul className="navList">

         
            <Link to='/user'  className='link'> <li className="navItems">
                 <div className="navSvg"
                 style={{
                     backgroundImage : `url(${home})`
                 }}
                 />
                 </li> </Link>
           

            {auth.isLoggedIn && (
            <Link to={`/${auth.userId}/places`} className='link'><li className="navItems"> <div className="navSvg"
            style={{
                backgroundImage : `url(${file})`
            }}
            /></li></Link>
            )}
            
            {auth.isLoggedIn && (
            <Link className='link' to='/place/new' ><li className="navItems"><div className="navSvg"
            style={{
                backgroundImage : `url(${post})`
            }}
            /></li></Link> 
            )}
            
            {!auth.isLoggedIn && (
            <Link to='/login'> <li className="navItems">LOGIN</li></Link> 
            )}
            
            {auth.isLoggedIn && (
            <Link > <li className="navItems" onClick={auth.logout}><div className="navSvg"
            style={{
                backgroundImage : `url(${profile})`
            }}
            /></li></Link> 
            )}           
            </ul>
        </nav>
    )
}

export default NavBar



{/* <ul className="navList">

         
<Link to='/user'  className='link'> <li className="navItems"> all user</li> </Link>


{auth.isLoggedIn && (
<Link to={`/${auth.userId}/places`} className='link'><li className="navItems"> my place</li></Link>
)}

{auth.isLoggedIn && (
<Link className='link' to='/place/new' ><li className="navItems">add place</li></Link> 
)}

{!auth.isLoggedIn && (
<Link to='/auth'> <li className="navItems">authenticate</li></Link> 
)}

{auth.isLoggedIn && (
<Link > <li className="navItems" onClick={auth.logout}>logout</li></Link> 
)}           
</ul> */}