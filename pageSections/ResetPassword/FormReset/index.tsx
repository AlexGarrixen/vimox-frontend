import React from 'react';
import { Form } from '@localComponents/resetPassword/Form';
import { PasswordResetedSuccessfully } from '@localComponents/resetPassword/PasswordResetedSuccessfully';

export const FormReset = () => {
  const [isSuccess, setSuccess] = React.useState(false);
  const handleSuccess = React.useCallback(() => setSuccess(true), []);

  return isSuccess ? (
    <PasswordResetedSuccessfully />
  ) : (
    <Form onSuccess={handleSuccess} />
  );
};
