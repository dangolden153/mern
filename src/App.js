import React, {useCallback,useState, useContext, useEffect} from 'react'
import NavBar from './component/navBar/navBar' 
import User from './component/user/user'
import Places from './component/userPlaces/userPlaces'
import HomePage from './component/home/home'
import Form from './component/form/form'
import addPlace from './component/addPlaces/addPlaces'
import  UpdatePlace from './component/updatePlace/updatePlace'
import Login from './component/login/login'
import SignUp from './component/signUp/signUp'
import {AnimatePresence} from 'framer-motion'

import ErrorModel from './component/errorModel/errorModel'
import {AuthContext} from './component/AuthContext/AuthContext'
import {Route, Switch, Redirect, useLocation} from 'react-router-dom'

const App = ()=>{

const location = useLocation()  
const [token, setToken] = useState(false)
const [userId, setUserId] = useState(false)

const login =useCallback((uid, token)=>{
  setToken(token)
  setUserId(uid)
  localStorage.setItem('the_userData', 
  JSON.stringify({userId: uid, token: token}))
},[])

const logout =useCallback(()=>{
  setToken(null)
  setUserId(null)

},[])

useEffect(()=>{
const storeData = JSON.parse(localStorage.getItem('the_userData'))
if (storeData && storeData.token){
  login(storeData.userId, storeData.token)
}
},[login])

const auth = useContext(AuthContext)


let route

if (token){

  route = (
    <React.Fragment>
    <Route path='/auth'  component={Form} />
    <Route path='/' exact component={User} />
    <Route path={`/:uid/places`}  component={Places} />
    <Route path='/places/:pid'  component={UpdatePlace} />
    <Route path='/place/new'  component={addPlace} />
    <Route path='/error'  component={ErrorModel} />

    <Redirect to='/' />
    </React.Fragment>
  )


} else {

  route = (
    <React.Fragment>
    <Route path='/auth'  component={Form} />
    <Route path='/' exact  component={User} />
    <Route path='/error'  component={ErrorModel} />
    <Route path='/login'  component={Login} />
    <Route path='/sign'  component={SignUp} />

    </React.Fragment>
  )

}


  return(

    <AuthContext.Provider value ={{
      isLoggedIn:!!token,
      token: token,
       userId:userId, 
       login: login, 
       logout: logout
       }}>
      <NavBar />

       {/* <AnimatePresence exitBeforeEnter> */}
      <Switch >
        {route}
        </Switch>
      {/* </AnimatePresence> */}

    </AuthContext.Provider>
  )
}
 
export default App