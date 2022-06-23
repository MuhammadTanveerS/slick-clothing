import React, { useContext } from 'react'
import {Link, Outlet} from 'react-router-dom'
import {ReactComponent as Crown} from '../../assets/crown.svg'
import { UserContext } from '../../context/UserContext'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import './styles.scss'

function Navbar() {

  const {currentUser, setCurrentUser} = useContext(UserContext);
  console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
              <Crown /> 
            </Link>
            <div className="links-container">
              <Link className='link' to='/shop'>SHOP</Link>
              {currentUser ? (
                <span className='link' onClick={signOutHandler}>SIGN OUT</span>
                ) : 
                (
                  <Link className='link' to='/signin'>SIGN IN</Link>
                )
              }
              
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Navbar