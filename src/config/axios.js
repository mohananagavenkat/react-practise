import axios from 'axios';

axios.interceptors.response.use(response => response, function (error) {
  // Do something with response error
  if (error.response.status === 401) {
    console.log('[response interceptor] unauthenticated, logging out ...');
    window.localStorage.removeItem('token');
    window.location.pathname = '/login';
  }
  // if (error.response.data.errors) {
  //   return Promise.reject(error.response);
  // } else {
  //   return Promise.reject({
  //     ...error.reponse,
  //     data: { errors: [{ msg: 'Server Error' }] }
  //   });
  // }
});

axios.interceptors.request.use(request => {
  console.log('[request interceptor]', request);
  const token = window.localStorage.getItem('token') || null;
  if (token) request.headers['x-auth-token'] = token;
  return request;
});

export default axios;
