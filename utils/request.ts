import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const axiosInstanceExternalServer = axios.create({
  baseURL: process.env.EXTERNAL_SERVER_API_URL,
  headers: {
    origin: process.env.ORIGIN_CLIENT,
  },
});

export const request = <T, R = AxiosResponse<T>>(
  url?: string,
  config?: Omit<AxiosRequestConfig, 'url' | 'baseURL'>
): Promise<R> =>
  axiosInstance.request<T, R>({
    url,
    ...config,
  });

export const requestExternalServer = <T, R = AxiosResponse<T>>(
  url?: string,
  config?: Omit<AxiosRequestConfig, 'url' | 'baseURL'>
): Promise<R> =>
  axiosInstanceExternalServer.request<T, R>({
    url,
    ...config,
  });
