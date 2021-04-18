import { NextApiRequest, NextApiResponse } from 'next';
import atob from 'atob';
import { requestExternalServer } from '@utils/request';
import { getError } from '@utils/getErrorAxios';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method, body } = req;

  if (method === 'PUT') {
    try {
      const { data } = await requestExternalServer('/auth/reset-password', {
        method: 'put',
        data: {
          newPassword: atob(body.newPassword),
          resetToken: body.resetToken,
        },
      });

      res.status(200).json(data);
    } catch (reason) {
      const error = getError(reason);
      res.status(error.statusCode).json(error.payload);
    }
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
