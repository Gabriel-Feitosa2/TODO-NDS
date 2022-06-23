import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
