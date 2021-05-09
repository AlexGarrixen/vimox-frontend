import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { GridBox } from '@pageSections/Login/GridBox';
import { SignupForm } from '@pageSections/Login/SignupForm';
import { LoginForm } from '@pageSections/Login/LoginForm';
import { Separator } from '@pageSections/Login/Separator';
import { getSession } from '@contexts/Auth/server';

const Login = (): JSX.Element => (
  <LayoutApp title='GxAnime - Login' verticallyCenterContent>
    <Container>
      <GridBox>
        <SignupForm />
        <Separator />
        <LoginForm />
      </GridBox>
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
