import { useEffect, useState } from 'react';

export const Header = () => {
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    const currentTime = new Date(date);
    setDate(currentTime.toDateString());
  }, []);

  return (
    <>
      <h1>Welcome to Cadillac Jacks Chat App</h1>
      <h4>{date}</h4>
    </>
  );
};
