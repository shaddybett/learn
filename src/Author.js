import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Author() {
    const {id} = useParams()
  return (
    <div>
        <h1>Best {id}</h1>
        <Link to ='/'>first</Link>
    </div>
  )
}
