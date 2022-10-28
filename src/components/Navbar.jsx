import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <Link to ='/' className='btn'>Home</Link>
        <Link to ='/Users' className='btn'>Users</Link>
        <Link to ='/About' className ="btn">About</Link>
    
    </div>
  )
}

export default Navbar