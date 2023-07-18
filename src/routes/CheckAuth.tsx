import { Navigate } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
};

const CheckAuth = ({ children }: Props) => {
  const pathname = window.location.pathname;
  const token = localStorage.getItem('token');

  if (!token && pathname !== '/login') {
    return <Navigate to='/login' />;
  }

  if (pathname === '/login' && token) {
    return <Navigate to='/' />;
  }

  return children;
};

export default CheckAuth;
