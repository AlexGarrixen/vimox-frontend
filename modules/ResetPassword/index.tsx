import React, { useState } from 'react';
import { Container } from '@components/Layout/Container';
import ResetPasswordLayout from './components/ResetPasswordLayout';
import ResetPasswordSuccess from './components/ResetPasswordSuccess';
import Form from './components/ResetPasswordForm';

const ResetPassword = () => {
  const [success, setSuccess] = useState(false);

  return (
    <ResetPasswordLayout>
      <Container maxWidth='sm'>
        {success ? (
          <ResetPasswordSuccess />
        ) : (
          <Form onSuccess={() => setSuccess(true)} />
        )}
      </Container>
    </ResetPasswordLayout>
  );
};

export default ResetPassword;
