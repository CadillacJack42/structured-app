import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getUser, getUserProfile } from '../services/fetch-utils';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const currUser = getUser();
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      getUserProfile(currUser.id).then((profile) => setUser(profile.data));
    } catch (error) {
      toast.error('No User signed in');
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
