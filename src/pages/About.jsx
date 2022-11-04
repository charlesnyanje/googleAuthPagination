import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Image from '../Assets/background.jpg'
function About() {



  return (
    <>


      <Helmet>
        <title>About</title>

        <meta name="description" content="About page" />

        <link rel="canonical" href="/About" />

      </Helmet>
      <div className="navbar">
        <Link to='/Dashboard' className='btn'>Home</Link>
        <Link to='/Users' className='btn'>Users</Link>

      </div>

      <section className="section">

        <img src={Image} alt="background" className="background" />

        <h1 className="heading">About</h1>

      </section>


    </>
  )
}

export default About