import React from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './AuthContext';
import { login } from '@services/auth';
import { request, requestApiRoute } from '@utils/request';
import { Session } from './types';

export const useAuthMethods = () => {
  const { setSession } = React.useContext(AuthContext);
  const router = useRouter();

  const logIn = async (email: string, password: string) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const sessionData = await login(email, password);
      await requestApiRoute('/auth/session', {
        data: sessionData,
        method: 'post',
      });
      setSession(sessionData);

      return true;
    } catch (reason) {
      throw reason;
    }
  };

  const logOut = async () => {
    await requestApiRoute('/auth/session', { method: 'delete' });
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
