import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';
import atob from 'atob';
import { requestExternalServer } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import { PostLoginResponse } from '@globalTypes/authServices';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method, body } = req;

  if (method === 'POST') {
    try {
      const { data } = await requestExternalServer<PostLoginResponse>(
        '/auth/login',
        {
          method: 'post',
          auth: {
            username: body.email,
            password: atob(body.password),
          },
        }
      );

      setCookie({ res }, 'token', data.token, {
        path: '/',
        sameSite: 'lax',
        httpOnly: true,
        secure: true,
      });
      setCookie({ res }, 'refresh-token', data.refreshToken, {
        path: '/',
        sameSite: 'lax',
        httpOnly: true,
        secure: true,
      });
      setCookie({ res }, 'user-data', JSON.stringify(data.user), {
        path: '/',
        sameSite: 'lax',
        httpOnly: true,
        secure: true,
      });

      res.status(201).json(data);
    } catch (reason) {
      const error = getError(reason);
      res.status(error.statusCode).json(error.payload);
    }
  } else {
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
