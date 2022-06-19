import React,{useState} from 'react'
import { createAuthUserFromEmailAndPass, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button';

import './styles.scss'

const fields = {
        displayName: '',
        email:'',
        password:'',
        confrimPassword:''
    }

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(fields);

    const {displayName,email,password,confrimPassword} = formFields;

    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormFields({...formFields, [name]:value})
    }

    const resetFields = () =>{
        setFormFields(fields);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(password !== confrimPassword){
            alert('Passwords donot Match');
            return;
        }
        
        try {
            const {user} = await createAuthUserFromEmailAndPass(email,password);
            await createUserDocumentFromAuth(user,{displayName});
             console.log(user);
             resetFields();
        } catch (error) {
            if(error.code == 'auth/email-already-in-use'){
                alert('Email Already in Use');
            }else{
                console.log("ERROR",error);
            }
            
        }
    }

    // console.log(formFields);

  return (
    <div className='signUp-container'>
        <h2>Don't have an account?</h2>
        <span>Sign Up</span>
        <form onSubmit={handleSubmit}>
            <div className='group'>
                <input className='form-input' type="text" required onChange={handleChange} name='displayName' value={displayName}/>
                <label className={`${displayName.length ? 'shrink' : ''} form-input-label`}>Name</label>
            </div>
            
            <div className='group'>
                <input className='form-input' type="email" required onChange={handleChange} name='email' value={email}/>
                <label className={`${email.length ? 'shrink' : ''} form-input-label`}>Email</label>                
            </div>
            
            <div className='group'>
                <input className='form-input' type="Password" required onChange={handleChange} name='password' value={password}/>
                <label className={`${password.length ? 'shrink' : ''} form-input-label`}>Password</label>                
            </div>
            
            <div className='group'>
                <input className='form-input' type="Password" required onChange={handleChange} name='confrimPassword' value={confrimPassword}/>
                <label className={`${confrimPassword.length ? 'shrink' : ''} form-input-label`}>Confirm Password</label>
            </div>
            
            <Button type='submit'>Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUpForm