import { DataProvider } from './context/DataProvider';
import { Header } from './views/Header';
import { Chat } from './views/Chat';

export default function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Chat />
      </DataProvider>
    </>
  );
}
