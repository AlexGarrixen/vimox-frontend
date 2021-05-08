import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  if (method === 'POST') {
    const { newCredentials } = body;

    setCookie({ res }, 'token', newCredentials.token, {
      path: '/',
      sameSite: 'lax',
      httpOnly: true,
      secure: true,
    });

    setCookie({ res }, 'refresh-token', newCredentials.refreshToken, {
      path: '/',
      sameSite: 'lax',
      httpOnly: true,
      secure: true,
    });

    res.status(200).json({ ok: true });
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
