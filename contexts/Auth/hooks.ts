import React from 'react';
import { AuthContext } from './AuthContext';
import { login } from '@services/auth';
import { Session } from './types';

export const useAuthMethods = () => {
  const { setSession } = React.useContext(AuthContext);

  const logIn = async (email: string, password: string) => {
    try {
      const sessionData = await login(email, password);
      setSession(sessionData);

      return true;
    } catch (reason) {
      throw reason;
    }
  };

  return {
    logIn,
  };
};

export const useSession = <S extends Session>(): [S['data'], S['loading']] => {
  const { session } = React.useContext(AuthContext);

  return [session.data, session.loading];
};
