import React, { useState } from 'react';
import { Container } from '@components/Layout/Container';
import ForgotPasswordLayout from './components/ForgotPasswordLayout';
import Form from './components/ForgotPasswordForm';
import ForgotPasswordSuccess from './components/ForgotPasswordSuccess';

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);

  return (
    <ForgotPasswordLayout>
      <Container maxWidth='sm'>
        {success ? (
          <ForgotPasswordSuccess />
        ) : (
          <Form onSuccess={() => setSuccess(true)} />
        )}
      </Container>
    </ForgotPasswordLayout>
  );
};

export default ForgotPassword;
