import { useContext } from 'react';
import { MessageContext } from '../context/MessageProvider';

export const useMessages = () => {
  const context = useContext(MessageContext);

  if (context === null) {
    throw new Error('Context must come from apprpriate provider');
  }

  return context;
};
