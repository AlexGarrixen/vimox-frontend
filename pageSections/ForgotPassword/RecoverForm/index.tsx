import React from 'react';
import { Form } from '@localComponents/forgotPassword/Form';
import { EmailSend } from '@localComponents/forgotPassword/EmailSend';

export const RecoverForm = () => {
  const [isSuccess, setSuccess] = React.useState(false);
  const handleSuccess = React.useCallback(() => setSuccess(true), []);

  return isSuccess ? <EmailSend /> : <Form onSuccess={handleSuccess} />;
};
