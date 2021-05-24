import React from 'react';
import { AuthContext } from './AuthContext';
import { getSession } from '@services/auth';
import { Session } from './types';

export const AuthProvider: React.FC = ({ children }) => {
  const [session, setSession] = React.useState<Partial<Session['data']>>(null);
  const [loading, setLoading] = React.useState(!session);

  React.useEffect(() => {
    getSession()
      .then(({ session }) => {
        setSession(session);
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
