import toast from 'react-hot-toast';
import { useUser } from '../hooks/useUser';
import { deleteMessage } from '../services/fetch-utils';
import { useData } from '../hooks/useData';

export const Message = ({ message }) => {
  const { handleDelete } = useData();
  const { user } = useUser();

  const handleDeleteMessage = async (id) => {
    const deleted = await deleteMessage(id);
    if (deleted.status === 200) {
      toast.success('Message Deleted');
    } else {
      toast.error('Something went wrong, try again');
    }

    handleDelete(id);
  };

  let myMessage;

  if (user.username === message.sender) {
    myMessage = true;
  } else {
    myMessage = false;
  }

  return (
    <div>
      <span>{`${message.sender} said ${message.message}  `}</span>
      <span>{new Date(message.timestamp).toDateString()}</span>
      {myMessage ? (
        <button onClick={() => handleDeleteMessage(message.id)}>
          Delete message
        </button>
      ) : null}
    </div>
  );
};
