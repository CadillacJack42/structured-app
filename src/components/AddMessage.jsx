import { useState } from 'react';
import { addNewMessage } from '../services/fetch-utils';
import { useUser } from '../hooks/useUser';

export const AddMessage = () => {
  const { user } = useUser();
  const [adding, setAdding] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewMessage(newMessage, user.username);
    setNewMessage('');
    setAdding(false);
  };

  let content;

  adding
    ? (content = (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter new message here"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          ></input>
          <button type="submit">Add new message</button>
        </form>
      ))
    : (content = (
        <button onClick={() => setAdding(true)}>Add new Message</button>
      ));
  return content;
};
