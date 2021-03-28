import React from 'react';
import './sign-in-and-sign-up.scss';
import SignIn from '../../compomnent/sign-in/sign-in';
import SignUp from '../../compomnent/sign-up/sign-up';

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;