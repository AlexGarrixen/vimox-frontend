import React from 'react';
import { Container } from '@components/Layout/Container';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import SuccessfulVerification from './components/SuccessfulVerification';
import Checking from './components/Checking';
import useEmailVerification from './hooks/useEmailVerification';

const EmailVerification = ({ token }: EmailVerificationProps) => {
  const { isLoading, error } = useEmailVerification(token);

  return (
    <Container maxWidth='sm'>
      {error && <ErrorMessage>Solicitud Invalida</ErrorMessage>}
      {isLoading && <Checking />}
      {!error && !isLoading && <SuccessfulVerification />}
    </Container>
  );
};

type EmailVerificationProps = {
  token: string;
};

export default EmailVerification;
