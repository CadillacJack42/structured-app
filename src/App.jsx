import { DataProvider } from './context/DataProvider';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoadingProvider } from './context/Loading';
import { AuthForm } from './views/Auth';
import { Toaster } from 'react-hot-toast';
import { Header } from './views/Header';
import { Chat } from './views/Chat';

export default function App() {
  return (
    <>
      <Toaster />
      <LoadingProvider>
        <DataProvider>
          <Header />
          <Switch>
            <Route exact path="/auth">
              <AuthForm />
            </Route>
            <Route path="/messages">
              <Chat />
            </Route>
            <Route exact path="/">
              <Redirect to="/messages" />
            </Route>
          </Switch>
        </DataProvider>
      </LoadingProvider>
    </>
  );
}
