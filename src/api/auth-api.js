import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const signupPost = async body => {
  const { data } = await authInstance.post('/users/signup', body);
  setToken(data.token);
  return data;
};

export const loginPost = async body => {
  const { data } = await authInstance.post('/users/login', body);
  setToken(data.token);
  return data;
};

export const currentGet = async token => {
  authInstance.defaults.headers.authorization = `Bearer ${token}`;
  try {
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutPost = async () => {
  const { data } = await authInstance.post('/users/logout');
  return data;
};

export default authInstance;
