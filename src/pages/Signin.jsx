import React from 'react'
import Image from '../Assets/background.jpg'
import Img from '../Assets/googleIcon.png'
import { provider, signInWithRedirect, getRedirectResult, onAuthStateChanged, getAuth, GoogleAuthProvider } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Helmet} from 'react-helmet-async'

function Signin() {
  const [user, setUser] = useState(null)

  const [isSignedIn, setIsSignedIn] = useState(false)
  const auth = getAuth()

  const navigate = useNavigate()

  const onClick = (e) => {
    e.preventDefault()

    signInWithRedirect(auth, provider)

  }
useEffect(()=>{



  
    
    getRedirectResult(auth)
      .then((result) => {
        if(result){
          const user = result.user
         
          
          setIsSignedIn(true);

          
  




        } else {
setIsSignedIn(false)
        
       }
      }).catch((error) => {
        //....


      });

      onAuthStateChanged(auth, user => {
        if (user) {
  
          setUser(user)
  
        } else {
          // User is signed out
          // ...
          setUser(null)
          
        }
      })



  }


,[])

  
    




  //useEffect(() => {


    /*;*/

 // }, //[])







  return (
    <>

      {isSignedIn ? navigate('/Dashboard') : ''}
      <Helmet>
<title>Sign in</title>
<meta name="description" content="Sign in page"/>
<link rel="canonical" href="/Signin"/>

    </Helmet>
      <section className='section' >
        <img src={Image} alt="" className="back-sign" />
        <h1 className="heading">Sign In With</h1>


        <img src={Img} alt="" className="googleIcon" onClick={onClick} />



      </section>





    </>
  )
}

export default Signin



