import React from 'react'
import NavBar from './Navbar/NavBar'

const Header = () => {

  const navbarProps={
    name:"aslan",
    age:25
  }







  return (
    <header>

        <div className="container">
        <div className='d-flex justify-content-between'>
            <div className="logo">Logo</div>
            <NavBar data={navbarProps}/>
        </div>
        </div>
    </header>
  )
}

export default Header