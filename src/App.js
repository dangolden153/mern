import React, {useCallback,useState, useContext} from 'react'
import NavBar from './component/navBar/navBar' 
import User from './component/user/user'
import Places from './component/userPlaces/userPlaces'
import SignUp from './component/signUp/signUp'
import Login from './component/login/login'
import Form from './component/form/form'
import addPlace from './component/addPlaces/addPlaces'
import {AuthContext} from './component/AuthContext/AuthContext'
import {Route, Switch, Router, Redirect} from 'react-router-dom'

const App = ()=>{

const [isLoggedIn, setIsloggedIn] = useState(false)


const login =useCallback(()=>{
  setIsloggedIn(true)

},[])
const logout =useCallback(()=>{
  setIsloggedIn(false)

},[])

const auth = useContext(AuthContext)

let route

if (isLoggedIn){

  route = (
    <React.Fragment>
    <Route path='/' exact component={User} />
    <Route path='/:userId/places' exact component={Places} />
    <Route path='/addPlace' exact component={addPlace} />

    <Redirect to='/' />
    </React.Fragment>
  )


} else {

  route = (
    <React.Fragment>
    <Route path='/' exact component={User} />
    <Route path='/:userId/places' exact component={Places} />
    <Route path='/form' exact component={Form} />

    <Redirect to='/form' />
    </React.Fragment>
  )

}


  return(

    <AuthContext.Provider value ={{isLoggedIn:isLoggedIn, login: login, logout: logout}}>
      <NavBar />

      <Switch>{route}</Switch>
      
    </AuthContext.Provider>
  )
}

export default App