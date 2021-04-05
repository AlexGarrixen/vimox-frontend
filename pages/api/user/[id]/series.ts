import { NextApiRequest, NextApiResponse } from 'next';
import { requestExternalServer } from '@utils/request';
import { getError } from '@utils/getErrorAxios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  if (method === 'GET') {
    try {
      const { data } = await requestExternalServer(`/user/${query.id}/series`);
      res.status(201).json(data);
    } catch (reason) {
      const error = getError(reason);
      res.status(error.statusCode).json(error.payload);
    }
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
