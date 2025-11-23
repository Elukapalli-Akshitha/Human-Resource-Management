import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Routes/AppRouter';
import useAuthStore from './store/authStore';
import { useEffect } from 'react';

const App = () => {
  const initAuth = useAuthStore((state) => state.initAuth);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
