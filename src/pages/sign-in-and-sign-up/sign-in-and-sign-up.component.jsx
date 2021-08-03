import React from 'react';

import '../sign-in-and-sign-up/sign-in-and-sign-up.style.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component'

const SignInandSignUp = () => (
    <div className="sign-in-and-sign-up"> 
        <SignIn />
        <SignUp />
    </div>
);

export default SignInandSignUp;