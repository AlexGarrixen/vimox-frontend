import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ResponseGetSession } from '@globalTypes/authServices';
import routes from '@config/apiRoutes';
import { getAxiosError } from '@utils/getAxiosError';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXTERNAL_SERVER_API_URL,
});

const axiosInstanceNextApi = axios.create({
  baseURL: '/api',
});

export const request = <T = unknown, R = AxiosResponse<T>>(
  url?: string,
  config?: Omit<AxiosRequestConfig, 'url' | 'baseURL'>
): Promise<R> =>
  axiosInstance.request<T, R>({
    url,
    ...config,
  });

export const requestApiRoute = <T = unknown, R = AxiosResponse<T>>(
  url?: string,
  config?: Omit<AxiosRequestConfig, 'url' | 'baseURL'>
): Promise<R> =>
  axiosInstanceNextApi.request<T, R>({
    url,
    ...config,
  });

axiosInstance.interceptors.request.use(async (req) => {
  const { data } = await requestApiRoute<ResponseGetSession>(
    routes.auth.session
  );

  if (data.session)
    req.headers['Authorization'] = `Bearer ${data.session.token}`;

  if (req.url === routes.auth.renewToken && data.session) {
    req.data = { refreshToken: data.session.refreshToken };
  }

  return req;
});

const restrictedAuthRoutes = [
  routes.auth.login,
  routes.auth.resetPassword,
  routes.auth.forgotPassword,
  routes.auth.emailConfirmation,
];

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === routes.auth.renewToken
    ) {
      await requestApiRoute(routes.auth.session, { method: 'delete' });
      window.location.replace('/login');
      return Promise.reject(getAxiosError(error));
    }

    if (
      error.response.status === 401 &&
      !restrictedAuthRoutes.includes(originalRequest.url)
    ) {
      const { data: newCredentials } = await request(routes.auth.renewToken, {
        method: 'post',
      });

      await requestApiRoute(routes.auth.renewCredentials, {
        method: 'post',
        data: { newCredentials },
      });

      return axiosInstance(originalRequest);
    }

    return Promise.reject(getAxiosError(error));
  }
);
