import { useState } from 'react';
import { signUp } from '../services/fetch-utils';
import toast from 'react-hot-toast';
import styles from './Auth.css';
import { useLoading } from '../hooks/useLoading';
import { useUser } from '../hooks/useUser';

export const AuthForm = () => {
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
    setUser(user);
    if (user) {
      toast.success('Successfully Signed Up');
    } else {
      toast.error('Uh Oh! Something went wrong. Please Try Again');
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span>
              <button onClick={null}>Sign In</button>
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
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
