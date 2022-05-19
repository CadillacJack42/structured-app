import { DataProvider } from './context/DataProvider';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoadingProvider } from './context/Loading';
import { AuthForm } from './views/Auth';
import { Toaster } from 'react-hot-toast';
import { Header } from './views/Header';
import { Chat } from './views/Chat';
import { UserProvider } from './context/UserProvider';
import { PrivateRoute } from './components/PrivateRoute';

export default function App() {
  return (
    <>
      <Toaster />
      <LoadingProvider>
        <UserProvider>
          <DataProvider>
            <Header />
            <Switch>
              <Route exact path="/auth">
                <AuthForm />
              </Route>
              <PrivateRoute path="/messages">
                <Chat />
              </PrivateRoute>
              <Route exact path="/">
                <Redirect to="/messages" />
              </Route>
            </Switch>
          </DataProvider>
        </UserProvider>
      </LoadingProvider>
    </>
  );
}
