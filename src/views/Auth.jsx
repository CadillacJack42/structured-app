import { useState } from 'react';
import styles from './Auth.css';

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [hasAccount, setHasAccount] = useState(false);

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
              <button>Sign In</button>
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
              <button>Sign Up</button>
              <button onClick={() => setHasAccount(true)}>
                Already A User?
              </button>
            </span>
          </fieldset>
        </form>
      ));

  return form;
};
