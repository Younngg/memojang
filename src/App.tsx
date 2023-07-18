import { GoogleOAuthProvider } from '@react-oauth/google';
import Router from './routes/Router';

const { VITE_GOOGLE_OAUTH_ID } = import.meta.env;

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={VITE_GOOGLE_OAUTH_ID as string}>
        <Router />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
