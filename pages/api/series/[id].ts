import { NextApiRequest, NextApiResponse } from 'next';
import { requestExternalServer } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { GetSeriesResponse } from '@globalTypes/serieServices';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method } = req;

  if (method === 'GET') {
    try {
      const serieId = req.query.id;
      const { data } = await requestExternalServer<GetSeriesResponse>(
        `/series/${serieId}`
      );
      res.status(200).json(data);
    } catch (reason) {
      const error = getError(reason);
      res.status(error.statusCode).json(error.payload);
    }
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
