import { createContext, useReducer, useState } from 'react';

// let initialState = [
//   {
//     id: '12345678-1234-1234-a234',
//     timestamp: Date.now(),
//     sender: 'Cadillac Jack',
//     message: 'Check out this cool chat app!',
//   },
// ];

export const ChatContext = createContext(null);

const chatReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload.message, ...state];
    case 'DELETE':
      return state.filter((item) => item.id != action.payload.id);
    case 'RESET':
      return action.payload.messages;
    case 'EDIT':
      return state.map((currMessage) => {
        if (currMessage.id === action.payload.message.id) {
          const { message } = action.payload.message;
          return { ...currMessage, message };
        }
        return currMessage;
      });
    case 'ADDREPLY':
      const addNewReply = [...state.replies, action.payload.reply];
      return { ...state, replies: addNewReply };

    default:
      break;
  }
};

export const DataProvider = ({ children }) => {
  const [chats, dispatch] = useReducer(chatReducer);

  const handleReset = (messages) => {
    dispatch({ type: 'RESET', payload: { messages } });
  };

  const handleAdd = (message) => {
    dispatch({ type: 'ADD', payload: { message } });
  };

  const handleEdit = (message) => {
    dispatch({ type: 'EDIT', payload: { message } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const handleAddReply = (reply) => {
    dispatch({ type: 'ADDREPLY', payload: { reply } });
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        handleReset,
        handleAdd,
        handleEdit,
        handleDelete,
        handleAddReply,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
