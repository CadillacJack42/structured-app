import styles from './Auth.css';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useUser } from '../hooks/useUser';
import { useLoading } from '../hooks/useLoading';
import { useLocation, useHistory } from 'react-router-dom';
import { signInUser, signUp } from '../services/fetch-utils';

export const AuthForm = () => {
  const location = useLocation();
  const history = useHistory();
  const { setLoading } = useLoading();
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [hasAccount, setHasAccount] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);

    const user = await signUp(email, password, username);

    setLoading(false);

    if (user) {
      toast.success('Successfully Signed Up');
      setUser(user);
      history.push(location.state.from.pathname);
    } else {
      toast.error('Uh Oh! Something went wrong. Please Try Again');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userProfile = await signInUser(email, password);
    setLoading(false);

    if (userProfile) {
      setUser(userProfile);
      history.push(location.state.from.pathname);
    } else {
      throw new Error(userProfile.error);
    }
  };

  let form;

  hasAccount
    ? (form = (
        <form className={styles['auth-form']}>
          <fieldset>
            <legend className={styles['auth-form-legend']}>Sign In</legend>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span>
              <button onClick={handleSignIn}>Sign In</button>
              <button onClick={() => setHasAccount(false)}>Not A User?</button>
            </span>
          </fieldset>
        </form>
      ))
    : (form = (
        <form className={styles['auth-form']}>
          <fieldset>
            <legend>Sign Up</legend>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span>
              <button onClick={handleSignUp}>Sign Up</button>
              <button onClick={() => setHasAccount(true)}>
                Already A User?
              </button>
            </span>
          </fieldset>
        </form>
      ));

  return form;
};
