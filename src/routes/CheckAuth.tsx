import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
};

const CheckAuth = ({ children }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    } else {
      try {
        jwtDecode(token);
        navigate('/');
      } catch (err) {
        navigate('/login');
      }
    }
  }, [navigate]);

  return children;
};

export default CheckAuth;
