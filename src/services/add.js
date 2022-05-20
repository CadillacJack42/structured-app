import { addNewMessage, getPublicMessages } from './fetch-utils';

export const add = async (message, username) => {
  await addNewMessage(message, username);
  const newMessageState = await getPublicMessages();
  return newMessageState;
};
