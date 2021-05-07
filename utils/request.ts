import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.EXTERNAL_SERVER_API_URL,
});

const axiosInstanceNextApi = axios.create({
  baseURL: '/api',
});

const axiosInstanceExternalServer = axios.create({
  baseURL: process.env.EXTERNAL_SERVER_API_URL,
  headers: {
    origin: process.env.ORIGIN_CLIENT,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const isLoginRoute =
      originalRequest.url && originalRequest.url === '/auth/login';

    if (
      error.response.status === 401 &&
      originalRequest.url === '/auth/renew-token'
    ) {
      await request('/auth/logout', { method: 'post' });
      window.location.replace('/login');
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !isLoginRoute) {
      await request('/auth/renew-token', {
        method: 'post',
      });

      return axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export const request = <T = unknown, R = AxiosResponse<T>>(
  url?: string,
  config?: Omit<AxiosRequestConfig, 'url' | 'baseURL'>
): Promise<R> =>
  axiosInstance.request<T, R>({
    url,
    ...config,
  });

export const requestExternalServer = <T = unknown, R = AxiosResponse<T>>(
  url?: string,
  config?: Omit<AxiosRequestConfig, 'url' | 'baseURL'>
): Promise<R> =>
  axiosInstanceExternalServer.request<T, R>({
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
