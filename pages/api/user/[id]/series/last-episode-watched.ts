import { NextApiResponse, NextApiRequest } from 'next';
import { parseCookies } from 'nookies';
import { requestExternalServer } from '@utils/request';
import { getError } from '@utils/getErrorAxios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = parseCookies({ req });
  const headers = { Authorization: `Bearer ${cookies.token}` };
  const { method, query, body } = req;

  if (method === 'PUT') {
    try {
      const { data } = await requestExternalServer(
        `/user/${query.id}/series/${body.serieId}/last-episode-watched`,
        {
          method: 'put',
          headers,
          data: {
            lastEpisodeWatched: body.lastEpisodeWatched,
          },
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
