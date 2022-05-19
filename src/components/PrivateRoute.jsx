import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { getUser } from '../services/fetch-utils';

export const PrivateRoute = ({ children, ...rest }) => {
  const user = getUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
