import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Tarefas from '../Pages/Tarefas/Tarefas';
import ProtectedRoute from './PrivateRoute';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/tarefas"
          element={
            <ProtectedRoute>
              <Tarefas />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
