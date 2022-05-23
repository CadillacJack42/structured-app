import { Chat } from './views/Chat';
import { Header } from './views/Header';
import { AuthForm } from './views/Auth';
import { Toaster } from 'react-hot-toast';
import { LoadingProvider } from './context/Loading';
import { DataProvider } from './context/DataProvider';
import { UserProvider } from './context/UserProvider';
import { PrivateRoute } from './components/PrivateRoute';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Detail } from './views/Detail';

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
              <PrivateRoute path="/messages/:id">
                <Detail />
              </PrivateRoute>
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
