import { useSelector } from 'react-redux';
import { selectLoggedInuser } from '../authSlice';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInuser);

  if (!user) {
    // Redirect to the login page if the user is not logged in
    return <Navigate to="/login" replace={ true} />;
  }

  // Render the children (protected content) if the user is logged in
  return children;
};

export default Protected;
