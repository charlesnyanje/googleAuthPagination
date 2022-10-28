import React from 'react'

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import Error from './pages/Error'


function App() {
  return (
    <>
    <Router>
<Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Users" element={<Users/>}/>
    <Route path="*" element={<Error/>}/>

</Routes>


    </Router>
    
    
    </>
  )
}

export default App