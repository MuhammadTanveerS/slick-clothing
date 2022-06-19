import React from 'react'
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const signIn = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

  return (
    <div>
        <h1>SIGN IN </h1>
        <button onClick={signIn}>
            Sign in with Popup
        </button>
    </div>
  )
}

export default SignIn