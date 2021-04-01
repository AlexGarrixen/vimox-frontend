import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { GridBox } from '@pageComponents/Login/GridBox';
import { SignupForm } from '@pageComponents/Login/SignupForm';
import { LoginForm } from '@pageComponents/Login/LoginForm';
import { Separator } from '@pageComponents/Login/Separator';
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
