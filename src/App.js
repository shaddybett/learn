import React from 'react'
import Body from './Body'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'
import NoPage from './NoPage'
import Nav from './Nav'
import Author from './Author'
import Content from './Content'

export default function App() {
  return (
    <div>
      <Nav/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<Body/>}/>
     <Route path='/about/:id' element={<Body/>}/>
     <Route path='/author' element={<Author/>}/>
     <Route path='/content'element={<Content/>}/>


     <Route path='*' element={<NoPage/>}/>

    </Routes>
    </div>
  )
}
