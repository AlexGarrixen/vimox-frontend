import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method } = req;

  if (method === 'POST') {
    destroyCookie({ res }, 'token', { path: '/' });
    destroyCookie({ res }, 'refresh-token', { path: '/' });
    destroyCookie({ res }, 'user-data', { path: '/' });
    res.status(200).json({ ok: true });
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
