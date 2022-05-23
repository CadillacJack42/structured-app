import { useParams } from 'react-router-dom';
import { fetchById } from '../services/fetch-utils';
import { useData } from '../hooks/useData';
import { useEffect } from 'react';
import { useLoading } from '../hooks/useLoading';

export const Detail = () => {
  const { setLoading, loading } = useLoading();
  const { handleReset, chats } = useData();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchById(id).then(handleReset);
    setLoading(false);
  }, []);
  console.log(chats);
  return (
    <>
      {loading ? (
        <h1> Loading Deatil View</h1>
      ) : (
        <>
          <h3>{chats?.sender}</h3>
          <p>{chats?.message}</p>
        </>
      )}
      <button>Add Reply</button>
    </>
  );
};
