import { NextApiRequest, NextApiResponse } from 'next';
import nookies, { setCookie, destroyCookie } from 'nookies';
import { extractSession } from '@utils/extractSession';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  if (method === 'GET') {
    const cookies = nookies.get({ req });
    const session = extractSession(cookies);

    res.status(200).json({ session });
  } else if (method === 'POST') {
    const data = body;

    setCookie({ res }, 'token', data.token, {
      path: '/',
      sameSite: 'lax',
      httpOnly: true,
      secure: true,
    });
    setCookie({ res }, 'refresh-token', data.refreshToken, {
      path: '/',
      sameSite: 'lax',
      httpOnly: true,
      secure: true,
    });
    setCookie({ res }, 'user-data', JSON.stringify(data.user), {
      path: '/',
      sameSite: 'lax',
      httpOnly: true,
      secure: true,
    });

    res.status(200).json({ ok: true });
  } else if (method === 'DELETE') {
    destroyCookie({ res }, 'token', { path: '/' });
    destroyCookie({ res }, 'refresh-token', { path: '/' });
    destroyCookie({ res }, 'user-data', { path: '/' });

    res.status(200).json({ ok: true });
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
