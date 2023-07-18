import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <Navbar />
      <div>{children || <Outlet />}</div>
    </div>
  );
};

export default Layout;
