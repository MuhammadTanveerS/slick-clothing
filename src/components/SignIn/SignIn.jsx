import React,{useEffect} from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../SignUp/SignUpForm';

const SignIn = () => {      
  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
        <h1>SIGN IN </h1>
        <button onClick={logGoogleUser}>
            Sign in with Popup
        </button>
        <SignUpForm/>
    </div>
  )
}

export default SignIn