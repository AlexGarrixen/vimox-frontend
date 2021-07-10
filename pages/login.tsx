import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import LoginModule from '@modules/Login';
import { getSession } from '@contexts/Auth/server';

const Login = () => (
  <LayoutApp title='Vimox - Login'>
    <LoginModule />
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
