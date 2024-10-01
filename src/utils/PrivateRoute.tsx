import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContextProvider';


const PrivateRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;