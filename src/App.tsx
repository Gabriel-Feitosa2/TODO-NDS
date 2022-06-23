import { AuthContext } from './contexts/auth-context';
import { getCurrentAccount } from './contexts/jwt/current-account';
import Router from './routes/Router';

function App() {
  return (
    <AuthContext.Provider value={{ getCurrentAccount: getCurrentAccount }}>
      <Router />
    </AuthContext.Provider>
  );
}

export default App;
