import { useLocation } from 'react-router-dom';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import HomeIcon from './ui/icons/HomeIcon';

const links = [
  { href: '/', title: 'Home', icon: <HomeIcon />, clicked: <HomeFillIcon /> },
];

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav className='w-1/5'>
      {links.map(({ href, title, icon, clicked }) => (
        <a className='flex items-center' href={href} key={href}>
          {pathname === href ? clicked : icon}
          <span>{title}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
