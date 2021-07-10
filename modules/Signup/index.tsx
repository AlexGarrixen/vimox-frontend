import React from 'react';
import { Container } from '@components/Layout/Container';
import SignupLayout from './components/SignupLayout';
import Form from './components/SignupForm';

const Signup = () => (
  <SignupLayout>
    <Container maxWidth='sm'>
      <Form />
    </Container>
  </SignupLayout>
);

export default Signup;
