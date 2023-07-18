import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import CheckAuth from './CheckAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <CheckAuth>
              <Layout />
            </CheckAuth>
          }
        >
          <Route path='/' element={<Home />} />
        </Route>
        <Route
          path='/login'
          element={
            <CheckAuth>
              <Login />
            </CheckAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
