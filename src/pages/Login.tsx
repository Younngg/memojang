import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl mb-5'>MEMOJANG</h1>
      <GoogleLogin
        onSuccess={(credentialResponse: CredentialResponse) => {
          const { credential } = credentialResponse;
          localStorage.setItem('token', credential as string);
          navigate('/');
        }}
        onError={() => {
          alert('Login Failed');
        }}
      />
    </div>
  );
};

export default Login;
