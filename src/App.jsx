import Header from './components/Header/Header';
import Main from './pages/Main';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

const App = () => {
  const [userName, setUserName] = useState("");
  return (
    <AuthContext.Provider value={{ userName, setUserName }}>
      <div>
        <Header />
        <Main />
      </div>
    </AuthContext.Provider>
  );
};

export default App;