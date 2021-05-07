export const extractSession = (cookies: { [key: string]: string }) => {
  const token = cookies['token'];
  const refreshToken = cookies['refresh-token'];
  const user = cookies['user-data'];

  if (token && refreshToken && user)
    return {
      token,
      refreshToken,
      user: JSON.parse(user),
    };

  return null;
};
