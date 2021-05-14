import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Button } from '@components/Form/Button';
import { Container } from '@components/Layout/Container';
import { ErrorMessageBox } from './styled';

export type ErrorMessageProps = {
  margin?: string;
  children?: React.ReactNode;
  center?: boolean;
  onClickRetry?: (e: any) => void;
};

export const ErrorMessage = ({
  margin,
  center = true,
  children,
  onClickRetry,
}: ErrorMessageProps) => (
  <ErrorMessageBox margin={margin} center={center}>
    <Container>
      <img src='/errorLogo.png' height={120} />
      <Typography as='h3' white margin='16px 0 0 0'>
        Oops!
      </Typography>
      <Typography white margin='10px 0 16px 0'>
        {children}
      </Typography>
      <Button primary onClick={onClickRetry}>
        Reintentar
      </Button>
    </Container>
  </ErrorMessageBox>
);
