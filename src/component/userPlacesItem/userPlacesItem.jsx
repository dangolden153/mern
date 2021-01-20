import React,{useState, useContext} from 'react'
import {AuthContext } from '../AuthContext/AuthContext'
import UpdatePlace from '../updatePlace/updatePlace'
import {Link, useParams} from 'react-router-dom'
import ErrorModel from '../errorModel/errorModel'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import Model from '../model/model'
import Button from '../customButton/button'
import svg from '../pics/menu.svg'
import close from '../pics/close.svg'

import axios from 'axios'
import './userPlacesItem.css'

const UserPlaceItem = ({data , onDelete})=>{ 

    
    const {description,title,name,image,id,creator} = data
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [error, setError] = useState ()
    const [showModel, setShowModel] = useState (false)
    const [showModelBtn, setShowModelBtn] = useState (false)

    const openShowModelBtn = ()=>setShowModelBtn(true)
    const closeShowModelBtn = ()=>setShowModelBtn(false)

    const openDeleteHandler = ()=>setShowModel(true)
    const closeDeleteHandler = ()=>setShowModel(false)

    const auth = useContext(AuthContext)
    const placeId = useParams().pid



    const deleteHandler =()=>{
        setLoadingSpinner(true)
        axios.delete(`https://dan-chatapp.herokuapp.com/api/places/${id}`,{

        headers: { Authorization : 'Bearer ' + auth.token}
    })

        .then(response =>{
            console.log(response)
            onDelete(id)
            setLoadingSpinner(false)


        }) .catch(err=>{
            console.log(err)
            setError('something went wrong,cannot delete place please try again')
            setLoadingSpinner(false)
        })

    }

    const handleError =()=>{
        setError(null)
    }



    return(

      
        <React.Fragment>
            {error && (
            <ErrorModel error ={error}
            footer={ <Button onClick={handleError}>close</Button>} />
        )}

        {loadingSpinner && (
            <LoadingSpinner onClick={handleError}/>
        )}

        
            <Model 
            header={<div>are you sure</div>} 
            show={showModel} 
            footerClass="footerBtn"
            footer={<div>
                <Button onClick={closeDeleteHandler}>cancel</Button>
                <Button danger onClick={deleteHandler}>delete</Button>
            </div>}
            >
                <div>
                    <p>Are you sure you want to delete this post ?</p>
                </div>

            </Model>

       

        <div className="userPlaceItem">
            
            <div className="userPlaceItemBox">

                <div className="user_padding_box">
                <div className="svgImg" onClick={openShowModelBtn}
                style={{
                    backgroundImage: `url(${svg})`
                }}
                />

               {showModelBtn && auth.userId === creator &&  (<div className="place_model" >
                <div className="svgCancel" onClick={closeShowModelBtn}
                style={{
                    backgroundImage: `url(${close})`
                }}
                />
                <Link  to={`/places/${id}`}><button  className='btn'>edit</button></Link>
                <button onClick={deleteHandler} className='btn'>delete</button>
                </div>)
                }

            <div className="user_placeText">
            <div className="email">{name}</div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            </div>

            <div className="btnContainer">

                {auth.userId === creator && (
                <Link  to={`/places/${id}`}>
                <button 
                className="btn">edit</button>
                </Link>
                 )}

                 {auth.userId === creator && (
                <button 
                onClick={openDeleteHandler}
                className="btn">delete</button>
                )}

            </div>

            </div>

            <div className="userPlaceImg">
             <img src={`https://dan-chatapp.herokuapp.com/${image}`} alt="..."/>
            </div>
            
           
            </div>
        </div>
        </React.Fragment>
    )

}

export default UserPlaceItem