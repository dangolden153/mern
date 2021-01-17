import React,{useState, useContext} from 'react'
import {AuthContext } from '../AuthContext/AuthContext'
import UpdatePlace from '../updatePlace/updatePlace'
import {Link, useParams} from 'react-router-dom'
import ErrorModel from '../errorModel/errorModel'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import Model from '../model/model'
import axios from 'axios'
import './userPlacesItem.css'

const UserPlaceItem = ({data , onDelete})=>{ 

    
    const {description,title,name,image,id,creator} = data
    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [error, setError] = useState ()
    const [showModel, setShowModel] = useState (false)

  
    const openDeleteHandler = ()=>setShowModel(true)
    const closeDeleteHandler = ()=>setShowModel(false)

    const auth = useContext(AuthContext)
    const placeId = useParams().pid



    const deleteHandler =()=>{
        setLoadingSpinner(true)
        axios.delete(`http://localhost:5000/api/places/${id}`,{

        headers: { Authorization : 'Bearer ' + auth.token}
    })

        .then(response =>{
            console.log(response)
            onDelete(id)
            setLoadingSpinner(false)


        }) .catch(err=>{
            console.log(err)
            setError('something went wrong,canoot dlete place please try again')
            setLoadingSpinner(false)
        })

    }

    const handleError =()=>{
        setError(null)
    }



    return(

      
        <React.Fragment>
            {error && (
            <ErrorModel error ={error} onCancel={handleError}/>
        )}

        {loadingSpinner && (
            <LoadingSpinner/>
        )}

        
            <Model 
            header={<div>are you sure</div>} 
            show={showModel} 
            footerClass="footerBtn"
            footer={<div>
                <button onClick={closeDeleteHandler}>close</button>
                <button onClick={deleteHandler}>delete</button>
            </div>}
            >
                <div>
                    <p>Are you sure you want to delete this place ?</p>
                </div>

            </Model>
       

        <div className="userPlaceItem">
            
            <div className="userPlaceItemBox">
            <div className="userPlaceImg"
            // style={{
            //     backgroundImage : `url(http://localhost:4000/${image})`
            // }}
            >
             <img src={`http://localhost:5000/${image}`} alt="img uploads"/>
            </div>


            <div className="placeText">
            <div className="email">{name}</div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            </div>

            <div className="btnContainer">
                <button className="btn">view place</button>

                {auth.userId === creator && (
                <Link  to={`/places/${id}`}>
                <button 
                className="btn">edit place</button>
                </Link>
                 )}

                 {auth.userId === creator && (
                <button 
                onClick={openDeleteHandler}
                className="btn">delete place</button>
                )}

            </div>
            </div>
        </div>
        </React.Fragment>
    )

}

export default UserPlaceItem