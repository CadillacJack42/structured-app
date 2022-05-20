import { useState } from 'react';
import { useData } from '../hooks/useData';
import { useUser } from '../hooks/useUser';
import { add } from '../services/add';

export const AddMessage = () => {
  const { user } = useUser();
  const { handleReset } = useData();
  const [adding, setAdding] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newState = await add(newMessage, user.username);
    handleReset(newState);
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
