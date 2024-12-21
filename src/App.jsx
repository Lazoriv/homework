import Header from './components/Header/Header';
import Main from './pages/Main';
import CartContextProvider from './context/CartContext';

const App = () => {

  return (
    <CartContextProvider>
      <Header />
      <Main />
    </CartContextProvider>
  );
};

export default App;