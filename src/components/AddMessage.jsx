import { useState } from 'react';

export const AddMessage = () => {
  const [adding, setAdding] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newMessage);
    setNewMessage('');
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
