import { createContext, useState, useEffect } from 'react';
import { getUser, getUserProfile } from '../services/fetch-utils';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const currUser = getUser();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserProfile(currUser.id).then((profile) => setUser(profile.data));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
