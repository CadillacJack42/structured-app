import { useParams } from 'react-router-dom';
import { fetchById } from '../services/fetch-utils';
import { useData } from '../hooks/useData';
import { useEffect, useState } from 'react';
import { useLoading } from '../hooks/useLoading';
import { addReply } from '../services/addReply';
import { useUser } from '../hooks/useUser';

export const Detail = () => {
  const { user } = useUser();
  const [reply, setReply] = useState('');
  const { setLoading, loading } = useLoading();
  const { handleReset, handleEditSingle, chats } = useData();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    addReply(reply, id, user.username)
      .then(({ data }) => handleReset(data[0]))
      .then(() => setReply(''));
  };

  useEffect(() => {
    setLoading(true);
    fetchById(id).then((chat) => handleReset(chat[0]));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <h1> Loading Deatil View</h1>
      ) : (
        <>
          {console.log(chats)}
          <h3>{chats?.sender}</h3>
          <p>{chats?.message}</p>
          {chats?.replies?.map((reply, index) => {
            return (
              <div key={reply.id + index}>
                <span>{`${reply.reply} from ${reply.sender}`}</span>
              </div>
            );
          })}
        </>
      )}
      <form onSubmit={handleSubmit}>
        <legend>Add Reply</legend>
        <input
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button>Add Reply</button>
      </form>
    </>
  );
};
