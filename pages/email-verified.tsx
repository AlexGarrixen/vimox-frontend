import React from 'react';
import { NextPageContext } from 'next';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';

import { emailConfirmation } from '@services/auth';

type EmailVerifiedProps = {
  querys: NextPageContext['query'];
};

const EmailVerified = ({ querys }: EmailVerifiedProps): JSX.Element => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const verifyEmail = React.useCallback(async () => {
    try {
      await emailConfirmation(querys.token as string);
      setLoading(false);
    } catch (reason) {
      setError(reason);
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    verifyEmail();
  }, []);

  const renderContent = () => {
    if (loading)
      return (
        <Title level='3' colorScheme='white'>
          Verificando...
        </Title>
      );

    if (error)
      return (
        <Title level='3' colorScheme='danger'>
          {error}
        </Title>
      );

    return (
      <>
        <img src='/verifiedBadge.png' />
        <Title level='3' colorScheme='white'>
          ¡Tu correo ha sido confirmado!
        </Title>
        <Spacing size={12} />
        <Text colorScheme='secondary'>
          Ahora puedes iniciar sesión con tu nueva cuenta
        </Text>
      </>
    );
  };

  return (
    <LayoutApp title='GxAnime - email confirmation' verticallyCenterContent>
      <Spacing size={80} />
      <Container style={{ textAlign: 'center' }}>{renderContent()}</Container>
      <Spacing size={30} />
    </LayoutApp>
  );
};

EmailVerified.getInitialProps = (ctx: NextPageContext) => ({
  querys: ctx.query,
});

export default EmailVerified;
