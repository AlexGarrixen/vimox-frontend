import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import SignupModule from '@modules/Signup';

const Login = () => (
  <LayoutApp title='Vimox - Signup'>
    <SignupModule />
  </LayoutApp>
);

export default Login;
