import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Body from './Body'

export default function Home() {
  return (
    <div>
      <Link to={Body}>about</Link>
      <Outlet/>
        <p>Welcome home!</p>
    </div>
  )
}
