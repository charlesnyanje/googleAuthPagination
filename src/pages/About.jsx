import React from 'react'
import{Link} from 'react-router-dom'
import Image from '../Assets/background.jpg'
function About() {
  return (
<>

    <div className="navbar">
    <Link to ='/' className='btn'>Home</Link>
    <Link to ='/Users' className='btn'>Users</Link>
   
</div>

<section className="section">

<img src={Image} alt="background" className="background"/>

<h1 className="heading">About</h1>

    </section>


</>
  )
}

export default About