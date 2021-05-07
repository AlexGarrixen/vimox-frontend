import { NextApiRequest, NextApiResponse } from 'next';
import nookies from 'nookies';
import { extractSession } from '@utils/extractSession';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method } = req;

  if (method === 'GET') {
    const cookies = nookies.get({ req });
    const session = extractSession(cookies);

    res.status(200).json({ session });
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
