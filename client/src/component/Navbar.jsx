import React from 'react'
import { Link } from 'react-router-dom'
import {NavBarStyle} from '../styles/navBarStyle'

export default function Nav() {

  return (
    <nav>
      <NavBarStyle>
      <h1><Link to={'/'}>PlayList</Link></h1>
        <div className='links'>
            <Link to={'/'}>Home</Link>
            <Link to={'/songs/new'}>Add Song</Link>
        </div>
        </NavBarStyle>
    </nav>
  )
}
