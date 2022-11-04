import React from 'react'

import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Users from './pages/Users'
import Error from './pages/Error'
import Signin from './pages/Signin'


function App() {
  return (
    <>
    <Router>
<Routes>
<Route path="/" element={<Signin/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Users" element={<Users/>}/>
    <Route path="*" element={<Error/>}/>

</Routes>


    </Router>
    
    
    </>
  )
}

export default App