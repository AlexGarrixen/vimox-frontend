import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { GridBox } from '@pageComponents/Login/GridBox';
import { SignupForm } from '@pageComponents/Login/SignupForm';
import { LoginForm } from '@pageComponents/Login/LoginForm';
import { Separator } from '@pageComponents/Login/Separator';

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

export default Login;
