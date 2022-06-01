import axios, { AxiosRequestConfig } from 'axios';
import store from 'redux/store';
import { changeLoading } from 'containers/App/store/actions';

// define common config for Axios
const instanceAxios = {
  baseURL: process.env.REACT_APP_API,
};

const axiosConfig = axios.create(instanceAxios);

const request = ({ method, url, data, ...rest }: AxiosRequestConfig) =>
  axiosConfig({
    method: method,
    url: url,
    data: data,
    ...rest,
  });

const requestToken = ({ method, url, data, ...rest }: AxiosRequestConfig) => {
  let token = localStorage.getItem('token');

  return axiosConfig({
    method: method,
    url: url,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...rest,
  });
};

const axiosConfigInter = axios.create(instanceAxios);

// Add a request interceptor
axiosConfigInter.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(changeLoading(true));
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch(changeLoading(false));
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosConfigInter.interceptors.response.use(
  function (response) {
    store.dispatch(changeLoading(false));
    return response;
  },
  function (error) {
    store.dispatch(changeLoading(false));
    return Promise.reject(error);
  },
);

const requestInter = ({ method, url, data, ...rest }: AxiosRequestConfig) =>
  axiosConfigInter({
    method: method,
    url: url,
    data: data,
    ...rest,
  });

const requestInterToken = ({
  method,
  url,
  data,
  ...rest
}: AxiosRequestConfig) => {
  let token = localStorage.getItem('token');

  return axiosConfigInter({
    method: method,
    url: url,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...rest,
  });
};

export { request, requestToken, requestInter, requestInterToken };
