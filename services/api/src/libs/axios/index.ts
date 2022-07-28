import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import get from 'lodash/get';

export const axiosGet = <T>(
  url: string,
  configs: AxiosRequestConfig = {}
): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, configs)
      .then((response: AxiosResponse) => {
        const responseData: T = get(response, 'data', {});
        resolve(responseData);
      })
      .catch((error: AxiosError) => {
        const errorData: T = get(error, 'response.data');
        reject(errorData);
      });
  });
};

export const axiosPost = <T, D>(
  url: string,
  data: D,
  configs: AxiosRequestConfig<D> = {}
): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, configs)
      .then((response: AxiosResponse) => {
        const responseData: T = get(response, 'data', {});
        resolve(responseData);
      })
      .catch((error: AxiosError) => {
        const errorData: T = get(error, 'response.data');
        reject(errorData);
      });
  });
};
