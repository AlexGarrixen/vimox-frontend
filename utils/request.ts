import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ResponseGetSession } from '@globalTypes/authServices';

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
  const { data } = await requestApiRoute<ResponseGetSession>('/auth/session');

  if (data.session)
    req.headers['Authorization'] = `Bearer ${data.session.token}`;

  if (req.url === '/auth/renew-token' && data.session) {
    req.data = { refreshToken: data.session.refreshToken };
  }

  return req;
});

const authenticationRoutesWithoutToken = [
  '/auth/login',
  '/auth/reset-password',
  '/auth/forgot-password',
  '/auth/email-confirmation',
];

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === '/auth/renew-token'
    ) {
      await requestApiRoute('/auth/session', { method: 'delete' });
      window.location.replace('/login');
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      !authenticationRoutesWithoutToken.includes(originalRequest.url)
    ) {
      const { data: newCredentials } = await request('/auth/renew-token', {
        method: 'post',
      });

      await requestApiRoute('/auth/renew-credentials', {
        method: 'post',
        data: { newCredentials },
      });

      return axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);
