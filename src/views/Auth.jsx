import { useState } from 'react';

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [hasAccount, setHasAccount] = useState(true);

  let form;

  hasAccount
    ? (form = (
        <form>
          <input
            type="text"
            value="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="text"
            value="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <button>Submit</button>
        </form>
      ))
    : (form = 'string');
};
