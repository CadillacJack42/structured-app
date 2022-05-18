import { DataProvider } from './context/DataProvider';
import { LoadingProvider } from './context/Loading';
import { Header } from './views/Header';
import { Chat } from './views/Chat';

export default function App() {
  return (
    <>
      <LoadingProvider>
        <DataProvider>
          <Header />
          <Chat />
        </DataProvider>
      </LoadingProvider>
    </>
  );
}
