import React,{useState} from 'react'
import { createAuthUserFromEmailAndPass,signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserFromEmailAndPass } from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button'


import './styles.scss'


const fields = {
  email:'',
  password:''
}

function SignInForm() {

  const [formFields, setFormFields] = useState(fields);

    const {email,password} = formFields;

    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormFields({...formFields, [name]:value})
    }

    const resetFields = () =>{
        setFormFields(fields);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault(); 
        
        try {
           const response = await signInAuthUserFromEmailAndPass(email,password);
           console.log(response);
             resetFields();
        } catch (error) {
          if(error.code === "auth/wrong-password" || error.code === "auth/user-not-found"){
            alert('Not Found!')
          }
        }
    }

    const signInWithGoogle = async() => {
      const {user} = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    }

  return (
    <div className='signUp-container'>
        <h2>Already have an account?</h2>
        <span>Sign In</span>
        <form onSubmit={handleSubmit}>
            <div className='group'>
                <input className='form-input' type="email" required onChange={handleChange} name='email' value={email}/>
                <label className={`${email.length ? 'shrink' : ''} form-input-label`}>Email</label>                
            </div>
            
            <div className='group'>
                <input className='form-input' type="Password" required onChange={handleChange} name='password' value={password}/>
                <label className={`${password.length ? 'shrink' : ''} form-input-label`}>Password</label>                
            </div>
            <div className='buttons-container'>
            <Button type='submit'>Sign In</Button>
            <Button type="button" buttonType='google' onClick = {signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm