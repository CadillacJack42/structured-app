import { useData } from '../hooks/useData';

export const Chat = () => {
  const { chats } = useData();

  return (
    <>
      <h3>A list of messages will be displayed here</h3>
      {chats.map((message) => {
        return (
          <div key={message.id}>
            <p>{message.sender}</p>
            <p>{message.message}</p>
            <p>{new Date(message.timestamp).toDateString()}</p>
          </div>
        );
      })}
    </>
  );
};
