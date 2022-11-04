import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../Assets/background.jpg'
import { getAuth,signOut} from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import { Helmet } from 'react-helmet-async'
function Dashboard(){


  const navigate=useNavigate()

  const[loggedOut,setLoggedOut] = useState(false);

  const logOut=(e)=>{
    e.preventDefault();
    const auth = getAuth();
  signOut(auth).then(() => {
    setLoggedOut(true)
  }).catch((error) => {
    // An error happened.
  });
   }
  return (
    <>
    <Helmet>
<title>Home</title>
<meta name="description" content="Home page"/>
<link rel="canonical" href="/Dashboard"/>

    </Helmet>
    <Navbar/>
    <section className="section">

<img src={Image} alt="background" className="background"/>

<h1 className="heading">Welcome</h1>



    </section>

    <div className="logOut">
      <button className='log-out-btn' onClick={logOut}>Log Out</button>
      {loggedOut ? navigate('/'): ''}

      </div>
    
    </>
  )
}

export default Dashboard