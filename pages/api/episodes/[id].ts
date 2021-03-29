import { NextApiRequest, NextApiResponse } from 'next';
import { requestExternalServer } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { GetEpisodesResponse } from '@globalTypes/episodeServices';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method, query } = req;

  if (method === 'GET') {
    try {
      const episodeId = query.id;
      const { data } = await requestExternalServer<GetEpisodesResponse>(
        `/episodes/${episodeId}`
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
