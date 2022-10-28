import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../Assets/background.jpg'
function Home() {
  return (
    <>
    
    <Navbar/>
    <section className="section">

<img src={Image} alt="background" className="background"/>

<h1 className="heading">Welcome</h1>

    </section>
    
    </>
  )
}

export default Home