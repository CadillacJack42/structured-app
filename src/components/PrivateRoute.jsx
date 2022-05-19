import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
