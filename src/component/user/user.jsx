import React, {useState,useEffect} from 'react'
import UserItems from '../userItems/userItems'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'
import ErrorModel from '../errorModel/errorModel'
import Button from '../customButton/button'
import AddPlace from '../addPlaces/addPlaces'
import axios from 'axios'
import './user.css'



const User = ()=>{

    const [loadingSpinner, setLoadingSpinner] = useState(false)
    const [error, setError] = useState ()
    const [loadedUser, setloadedUser] = useState ()



  const res = ()=>{
    setLoadingSpinner(true)
    axios.get("https://dan-chatapp.herokuapp.com/api/users")
    .then(response =>{
        console.log(response)
        setloadedUser(response.data.user)
        setLoadingSpinner(false)

    }).catch (error => {
        console.log(error)
        setLoadingSpinner(false)
        setError('cannot fetch users,please try again')

    })
  }

  useEffect(()=>{
      res()
  },[])

  const errorHandler =()=>{
      setError(null)
  }

    return (
        <div className="user">
            {loadingSpinner && (
                <LoadingSpinner />
            )}

            {error && (
                <ErrorModel error={error} show={error} 
                onCancel={errorHandler}
                footer={<Button onClick={errorHandler} danger>close</Button>}
                />
            )}

        <div className="userBox">
            {
              !loadingSpinner && loadedUser && loadedUser.map(data =>
                 <UserItems data={data} key={data.id} place={data.places.length} />)
            }
          
        </div>
        </div>
    )
}

export default User