import { Redirect } from 'react-router-dom';
import { client } from './client';

export const getUser = () => {
  return client.auth.session() && client.auth.session().user;
};

export const checkAuth = () => {
  const user = getUser();

  if (!user) {
    <Redirect to="/auth" />;
  }
};

export const redirectIfLoggedIn = () => {
  if (getUser()) {
    <Redirect to="/messages" />;
  }
};

export const getUserProfile = async (id) => {
  const response = await client
    .from('profiles')
    .select()
    .match({ user_id: id })
    .single();

  return response;
};

export const creatProfile = async (username, email, user_id) => {
  const response = await client
    .from('profiles')
    .insert({ username, email, user_id });
  return response.data[0];
};

export const signUp = async (email, password, username) => {
  const response = await client.auth.signUp({ email, password });
  let user;
  if (response.user) {
    user = await creatProfile(username, email, response.user.id);
  } else {
    throw new Error(response.error);
  }
  return user;
};

export const signInUser = async (email, password) => {
  const response = await client.auth.signIn({ email, password });
  const profile = await getUserProfile(response.user.id);

  return profile;
};

export async function logout() {
  await client.auth.signOut();
}

export const addNewMessage = async (message, sender) => {
  const { data } = await client.from('messages').insert({ message, sender });
  return data[0];
};

export const getPublicMessages = async () => {
  const { data } = await client.from('messages').select();

  return data;
};

export const deleteMessage = async (id) => {
  try {
    const response = await client.from('messages').delete().match({ id });
    return response;
  } catch (error) {
    console.error(error);
  }
};
