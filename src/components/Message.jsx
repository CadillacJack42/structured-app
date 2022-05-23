import toast from 'react-hot-toast';
import { useUser } from '../hooks/useUser';
import { deleteMessage } from '../services/fetch-utils';
import { useData } from '../hooks/useData';
import { Link } from 'react-router-dom';

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
      <Link
        to={{ pathname: `/messages/${message.id}` }}
      >{`${message.sender} said ${message.message}  `}</Link>
      <span>{new Date(message.timestamp).toDateString()}</span>
      {myMessage ? (
        <>
          <button>Edit message</button>
          <button onClick={() => handleDeleteMessage(message.id)}>
            Delete message
          </button>
        </>
      ) : null}
    </div>
  );
};
