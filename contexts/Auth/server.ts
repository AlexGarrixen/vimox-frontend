import { NextPageContext } from 'next';
import nookies from 'nookies';

export const getSession = (ctx: NextPageContext) => {
  const cookies = nookies.get(ctx);
  const session: { [key: string]: string } = {};
  const token = cookies.token;
  const refreshToken = cookies['refresh-token'];
  const user = cookies['user-data'];

  if (token) session.token = token;
  if (refreshToken) session['refreshToken'] = refreshToken;
  if (user) session['user-data'] = user;

  return session;
};
