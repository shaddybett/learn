import React from 'react'
import Body from './Body'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'
import NoPage from './NoPage'
export default function App() {
  return (
    <div>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='about' element={<Body/>}/>
     <Route path='*' element={<NoPage/>}/>
     
    </Routes>
    </div>
  )
}
