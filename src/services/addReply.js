import { addNewReply } from './fetch-utils';

export const addReply = async (reply, message_id, sender) => {
  const response = await addNewReply(reply, message_id, sender);
  console.log('RESPONSE', response);
  return response;
};
