import React,{useEffect} from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../SignUp/SignUpForm';
import SignInForm from './SignInForm';

const SignIn = () => {      
  

  return (
    <div className='auth-container'>
        
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
}

export default SignIn