import { createContext, useReducer } from 'react';

let initialState = [
  {
    id: '12345678-1234-1234-a234',
    timestamp: Date.now(),
    sender: 'Cadillac Jack',
    message: 'Check out this cool chat app!',
  },
];

export const ChatContext = createContext(null);

const chatReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload.message, ...state];
    case 'DELETE':
      return state.filter((item) => item.id != action.payload.id);
    case 'EDIT':
      return state.map((currMessage) => {
        if (currMessage.id === action.payload.message.id) {
          const { message } = action.payload.message;
          return { ...currMessage, message };
        }
        return currMessage;
      });

    default:
      break;
  }
};

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
    <ChatContext.Provider
      value={{ chats, handleAdd, handleEdit, handleDelete }}
    >
      {children}
    </ChatContext.Provider>
  );
};
