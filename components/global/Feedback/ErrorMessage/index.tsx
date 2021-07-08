import React, { FC } from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Button } from '@components/Form/Button';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { ErrorMessageBox } from './styled';

export const ErrorMessage: FC<ErrorMessageProps> = ({
  margin,
  center = true,
  children,
  onClickRetry,
}) => (
  <ErrorMessageBox margin={margin} center={center}>
    <Container>
      <img src='/errorLogo.png' height={120} />
      <Spacing size={16} />
      <Title level='3' colorScheme='white'>
        Oops!
      </Title>
      <Spacing size={10} />
      <Text colorScheme='white'>{children}</Text>
      <Spacing size={16} />
      <Button onClick={onClickRetry}>Reintentar</Button>
    </Container>
  </ErrorMessageBox>
);

export type ErrorMessageProps = {
  margin?: string;
  center?: boolean;
  onClickRetry?: (e: any) => void;
};
