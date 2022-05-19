import { Redirect } from 'react-router-dom';
import { client, checkError } from './client';
import { useLoading } from '../hooks/useLoading';

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
  return checkError(response[0]);
};

export const signUp = async (email, password, username) => {
  const response = await client.auth.signUp({ email, password });

  if (response.user) {
    const user = await creatProfile(username);
  } else {
    throw new Error(response.error);
  }
  return user;
};

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}
