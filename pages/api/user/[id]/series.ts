import { NextApiRequest, NextApiResponse } from 'next';
import { requestExternalServer } from '@utils/request';
import { getError } from '@utils/getErrorAxios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;
  if (method === 'GET') {
    try {
      const { data } = await requestExternalServer(`/user/${query.id}/series`);
      res.status(201).json(data);
    } catch (reason) {
      const error = getError(reason);
      res.status(error.statusCode).json(error.payload);
    }
  } else if (method === 'POST') {
    try {
      const { data } = await requestExternalServer(`/user/${query.id}/series`, {
        method: 'post',
        data: {
          serieId: body.serieId,
        },
      });
      res.status(201).json(data);
    } catch (reason) {
      const error = getError(reason);
      res.status(error.statusCode).json(error.payload);
    }
  } else if (method === 'DELETE') {
    try {
      const { data } = await requestExternalServer(
        `/user/${query.id}/series/${body.serieId}`,
        {
          method: 'delete',
        }
      );
      res.status(201).json(data);
    } catch (reason) {
      const error = getError(reason);
      res.status(error.statusCode).json(error.payload);
    }
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
