import React from 'react';
import { AuthContext } from './AuthContext';
import { request } from '@utils/request';
import { Session } from './types';

export const AuthProvider: React.FC = ({ children }) => {
  const [session, setSession] = React.useState<Partial<Session['data']>>(null);
  const [loading, setLoading] = React.useState(!Boolean(session));

  React.useEffect(() => {
    request<Record<string, string>>('auth/cookies')
      .then(({ data }) => {
        const sessionData: { [key: string]: string } = {};

        if (data?.cookies) {
          const token = data.cookies['token'];
          const refreshToken = data.cookies['refresh-token'];
          const user = data.cookies['user-data'];

          sessionData.token = token;
          sessionData['refresh-token'] = refreshToken;
          sessionData['user-data'] = user;
        }

        setSession(sessionData);
        setLoading(false);
      })
      .catch((reason) => {
        setLoading(false);
      });
  }, []);

  const contextValue = React.useMemo(
    () => ({
      session: {
        loading,
        data: session,
      },
      setSession,
    }),
    [session, loading, setSession]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
