import React from 'react';
import { NextPageContext } from 'next';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Typography } from '@components/DataDisplay/Typography';
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
        <Typography as='h3' white>
          Verificando...
        </Typography>
      );

    if (error)
      return (
        <Typography as='h3' white>
          {error}
        </Typography>
      );

    return (
      <>
        <img src='/verifiedBadge.png' />
        <Typography as='h3' white>
          ¡Tu correo ha sido confirmado!
        </Typography>
        <Typography margin='12px 0 0 0'>
          Ahora puedes iniciar sesión con tu nueva cuenta
        </Typography>
      </>
    );
  };

  return (
    <LayoutApp title='GxAnime - email confirmation' verticallyCenterContent>
      <Container style={{ textAlign: 'center' }}>{renderContent()}</Container>
    </LayoutApp>
  );
};

EmailVerified.getInitialProps = (ctx: NextPageContext) => ({
  querys: ctx.query,
});

export default EmailVerified;
