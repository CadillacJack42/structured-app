import { addNewMessage, getPublicMessages } from './fetch-utils';

export const add = async (message, username) => {
  const check = await addNewMessage(message, username);
  return check;
};
