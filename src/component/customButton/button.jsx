import React from 'react'
import { Link } from 'react-router-dom'

import './button.css'

const Button =props=>{

if (props.href){
    return (
        <a href={props.href} className={` ${props.inverse && 'inverse'}
         ${props.danger && 'danger'} ${props.border && 'border'} ${props.buttonClass && 'buttonClass'} button `}>
             {props.children}
        </a>
    )}

    if (props.to){
        return (
            <Link to={props.to} className={`button ${props.inverse && 'inverse'}
            ${props.danger && 'danger'} ${props.border && 'border'} ${props.buttonClass && 'buttonClass'}`}>
            {props.children}
            </Link>
        )
    }

    return (
        <button className={`button ${props.inverse && 'inverse'}
        ${props.danger && 'danger'} ${props.border && 'border'} ${props.buttonClass}`}
        onClick={props.onClick}
        >
        {props.children}
        </button>
    )
}

export default Button