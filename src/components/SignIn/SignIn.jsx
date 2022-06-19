import React from 'react'
import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const signIn = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
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