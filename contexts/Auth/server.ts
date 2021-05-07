import { NextPageContext, NextApiRequest } from 'next';
import nookies from 'nookies';
import { extractSession } from '@utils/extractSession';

export const getSession = (
  ctx?: Pick<NextPageContext, 'req'> | { req: NextApiRequest }
) => {
  const cookies = nookies.get(ctx);

  return extractSession(cookies);
};
