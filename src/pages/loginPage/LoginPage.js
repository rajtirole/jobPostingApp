import React from 'react'
import Login from '../../components/Login/Login'
const LoginPage = ({isSignedIn,setIsSignedIn,response,setresponse}) => {
  return (
    <Login  response={response} setresponse={setresponse} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}></Login>
  )
}

export default LoginPage