import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import {ReactComponent as Crown} from '../../assets/crown.svg'

import './styles.scss'

function Navbar() {
  return (
    <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
              <Crown /> 
            </Link>
            <div className="links-container">
              <Link className='link' to='/shop'>SHOP</Link>
              <Link className='link' to='/signin'>SIGN IN</Link>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Navbar