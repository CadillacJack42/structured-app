import { useState, useEffect } from 'react';
import { getPublicMessages } from '../services/fetch-utils';

export const CatMessages = () => {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    getPublicMessages().then((chats) => setMessages(chats));
  }, []);

  return messages;
};
