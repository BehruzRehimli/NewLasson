import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header>

        <div className="container">
        <div className='d-flex justify-content-between'>
            <div className="logo">Logo</div>
            <NavBar/>
        </div>
        </div>
    </header>
  )
}

export default Header