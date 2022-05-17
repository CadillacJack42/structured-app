import { createContext, useReducer } from 'react';

let initialState = [
  {
    id: '12345678-1234-1234-a234',
    timestamp: Date.now(),
    sender: 'Cadillac Jack',
    message: 'Check out this cool chat app!',
  },
];

const TextContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [chats, dispatch] = useReducer(chatReducer, initialState);

  const handleAdd = (message) => {
    dispatch({ type: 'ADD', payload: { message } });
  };

  const handleEdit = (message) => {
    dispatch({ type: 'EDIT', payload: { message } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  return (
    <TextContext.Provider
      value={{ chats, handleAdd, handleEdit, handleDelete }}
    >
      {children}
    </TextContext.Provider>
  );
};
