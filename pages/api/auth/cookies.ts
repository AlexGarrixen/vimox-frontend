import { NextApiRequest, NextApiResponse } from 'next';
import nookies from 'nookies';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method } = req;

  if (method === 'GET') {
    const cookies = nookies.get({ req });
    res.status(200).json({ cookies });
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
