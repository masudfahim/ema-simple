import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [eror, seteror] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)



    const handleEmailBlur = (event) => {
        setemail(event.target.value)

    }
    if (user) {
        navigate('/shop')
    }
    const handlePasswordBlur = event => {
        setpassword(event.target.value)
    }
    const handleconfirmpasswordblur = event => {
        setconfirmpassword(event.target.value)

    }


    const handlecreatuser = event => {
        event.preventDefault();
        if (password !== confirmpassword)
            seteror('Your two password did not match')
        if (password.length < 6) {
            seteror('password must be 6 caracters')
            return;
        }


        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handlecreatuser} action="">
                    <div className='input-group'>
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="Password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="Confirm-Password">Confirm-Password</label>
                        <input onBlur={handleconfirmpasswordblur} type="password" name="Confirm-Password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{eror}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />




                </form>
                <p>Already have an account?<Link className='form-link' to={'/login'}>Creat an account</Link></p>
            </div>


        </div>
    );
};

export default SignUp;