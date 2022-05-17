import { createContext } from 'react';

const TextContext = createContext(null);

export const DataProvider = ({ children }) => {
  return <TextContext.Provider>{children}</TextContext.Provider>;
};
