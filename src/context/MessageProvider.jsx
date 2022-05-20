import { createContext, useState, useEffect } from 'react';
import { getPublicMessages } from '../services/fetch-utils';

export const MessageContext = createContext(null);

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    getPublicMessages().then((chats) => setMessages(chats));
  }, []);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};
