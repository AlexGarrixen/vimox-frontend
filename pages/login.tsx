import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { AuthForms } from '@pageSections/Login/AuthForms';
import { getSession } from '@contexts/Auth/server';

const Login = (): JSX.Element => (
  <LayoutApp title='Vimox - Login' verticallyCenterContent>
    <Container>
      <AuthForms />
    </Container>
  </LayoutApp>
);

export const getServerSideProps = async (ctx) => {
  const session = getSession(ctx);

  if (session && session.token)
    return {
      redirect: {
        destination: '/',
      },
    };

  return {
    props: {},
  };
};

export default Login;
