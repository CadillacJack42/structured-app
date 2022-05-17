import { useContext } from 'react';
import { ChatContext } from '../context/DataProvider';

export const useData = () => {
  const context = useContext(ChatContext);

  if (context === null) {
    throw new Error('Context must come from apprpriate provider');
  }

  return context;
};
