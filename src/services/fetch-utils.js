import { Redirect } from 'react-router-dom';
import { client, checkError } from './client';
import { useLoading } from '../hooks/useLoading';

const { setLoading } = useLoading();

export const getUser = () => {
  return client.auth.session() && client.auth.session().user;
};

export const checkAuth = () => {
  const user = getUser();

  if (!user) {
    <Redirect to="/login" />;
  }
};

export const redirectIfLoggedIn = () => {
  if (getUser()) {
    <Redirect to="/messages" />;
  }
};

export const creatProfile = async (username) => {
  const response = await client.from('profiles').insert({ username });
  return checkError(response);
};

export const signUp = async (email, password, username) => {
  setLoading(true);
  const response = await client.auth.signUp({ email, password });

  if (response.user) {
    await creatProfile(username);
  } else {
    throw new Error(response.error);
  }
  setLoading(false);
};
