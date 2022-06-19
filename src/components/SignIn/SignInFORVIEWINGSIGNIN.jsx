import { getRedirectResult } from 'firebase/auth';
import React,{useEffect} from 'react'
import {auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../SignUp/SignUpForm';

const SignIn = () => {
  // useEffect( () => {
  //   async function check(){
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if(response){
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   check();
    
  // },[]);
        
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
        {/* <button onClick={signInWithGoogleRedirect}>
            Sign in with Redirect
        </button> */}
        <SignUpForm/>
    </div>
  )
}

export default SignIn