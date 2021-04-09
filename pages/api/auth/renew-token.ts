import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie, parseCookies } from 'nookies';
import { requestExternalServer } from '@utils/request';
import { getError } from '@utils/getErrorAxios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method === 'POST') {
    try {
      const cookies = parseCookies({ req });

      const { data } = await requestExternalServer('/auth/renew-token', {
        method: 'post',
        data: {
          refreshToken: cookies['refresh-token'],
        },
      });

      const isSecureCookie = process.env.NODE === 'production';

      setCookie({ res }, 'token', data.token, {
        path: '/',
        sameSite: 'lax',
        httpOnly: true,
        secure: isSecureCookie,
      });

      setCookie({ res }, 'refresh-token', data.refreshToken, {
        path: '/',
        sameSite: 'lax',
        httpOnly: true,
        secure: isSecureCookie,
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
