import React from 'react'
import{Link} from 'react-router-dom'
import Image from '../Assets/background.jpg'
import {Helmet} from 'react-helmet-async'
function Error() {
  return (
    <>
 <Helmet>
<title>Error</title>
<meta name="description" content="Error page"/>
<link rel="canonical" href="/Error"/>

    </Helmet>


<div className="navbar">
        <Link to ='/Dashboard' className='btn'>Home</Link>
        <Link to ='/Users' className='btn'>Users</Link>
        <Link to ='/About' className ="btn">About</Link>
    
    </div>
    <section className="section">

<img src={Image} alt="background" className="background"/>

<h1 className="heading">404.Page Not Found</h1>

    </section>


    
    </>
  )
}

export default Error