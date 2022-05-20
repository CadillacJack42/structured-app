import { useContext, useEffect } from 'react';
import { ChatContext } from '../context/DataProvider';
import { getPublicMessages } from '../services/fetch-utils';
import toast from 'react-hot-toast';

export const useData = () => {
  const context = useContext(ChatContext);

  if (context === null) {
    throw new Error('Context must come from apprpriate provider');
  }

  const { chats, handleReset } = context;

  useEffect(() => {
    const getChats = async () => {
      try {
        const chatMessages = await getPublicMessages();
        handleReset(chatMessages);
      } catch (err) {
        toast.error(err.message);
        throw err;
      }
    };

    getChats();
  }, []);

  return context;
};
