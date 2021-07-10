import React from 'react';
import { Container } from '@components/Layout/Container';
import LoginLayout from './components/LoginLayout';
import Form from './components/LoginForm';

const Login = () => (
  <LoginLayout>
    <Container maxWidth='sm'>
      <Form />
    </Container>
  </LoginLayout>
);

export default Login;
