import { useEffect, useState } from 'react';
import { logout } from '../services/fetch-utils';
import { useUser } from '../hooks/useUser';

export const Header = () => {
  const { user } = useUser();
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    const currentTime = new Date(date);
    setDate(currentTime.toDateString());
  }, []);

  return (
    <>
      <h1>Welcome to Cadillac Jacks Chat App</h1>
      <h4>{date}</h4>
      {user.username && <button onClick={logout}>Log Out</button>}
    </>
  );
};
