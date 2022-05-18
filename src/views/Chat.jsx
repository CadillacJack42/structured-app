import { useData } from '../hooks/useData';
import { Message } from '../components/Message';

export const Chat = () => {
  const { chats } = useData();

  return (
    <>
      <h3>A list of messages will be displayed here</h3>
      {chats.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
    </>
  );
};
