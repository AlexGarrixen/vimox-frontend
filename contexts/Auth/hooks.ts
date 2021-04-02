import React from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './AuthContext';
import { login } from '@services/auth';
import { request } from '@utils/request';
import { Session } from './types';

export const useAuthMethods = () => {
  const { setSession } = React.useContext(AuthContext);
  const router = useRouter();

  const logIn = async (email: string, password: string) => {
    try {
      const sessionData = await login(email, password);
      setSession(sessionData);

      return true;
    } catch (reason) {
      throw reason;
    }
  };

  const logOut = async () => {
    await request('/auth/logout', { method: 'post' });
    setSession(null);
    router.replace('/login');
  };

  return {
    logIn,
    logOut,
  };
};

export const useSession = <S extends Session>(): [S['data'], S['loading']] => {
  const { session } = React.useContext(AuthContext);

  return [session.data, session.loading];
};
