import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '@utils/endpoints';

export const request = <T, R = AxiosResponse<T>>(
  url?: string,
  config?: Omit<AxiosRequestConfig, 'url' | 'baseURL'>
): Promise<R> =>
  axios.request<T, R>({
    url,
    baseURL: BASE_URL,
    ...config,
  });
