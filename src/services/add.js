import { useData } from '../hooks/useData';
import { addNewMessage, getPublicMessages } from './fetch-utils';

export const add = async (message, username) => {
  const { handleReset } = useData();
  await addNewMessage(message, username);
  const newMessageState = await getPublicMessages();

  handleReset(newMessageState);

  return newMessageState;
};
