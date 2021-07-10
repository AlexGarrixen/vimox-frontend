import { useState, useEffect, useCallback } from 'react';
import { emailConfirmation } from '@services/auth';

const useEmailVerification = (token: string) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const verifyEmail = useCallback(async () => {
    try {
      await emailConfirmation(token);
      setLoading(false);
    } catch (reason) {
      setError(reason);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    verifyEmail();
  }, []);

  return {
    isLoading,
    error,
  };
};

export default useEmailVerification;
