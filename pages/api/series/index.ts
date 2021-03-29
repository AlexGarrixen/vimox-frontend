import { NextApiRequest, NextApiResponse } from 'next';
import { requestExternalServer } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { GetSeriesResponse, GetSeriesParams } from '@globalTypes/serieServices';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method } = req;
  if (method === 'GET') {
    try {
      const querys: GetSeriesParams = req.query;
      const { data } = await requestExternalServer<GetSeriesResponse>(
        '/series',
        {
          params: querys,
        }
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
