import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { NavigationBar } from '../libs/types/NavigationBar';

const NAVIGATION_LIST = [
  {
    name: 'Dashboard',
    href: '/',
    isEnd: true,
  },
  {
    name: 'Users',
    href: '/users',
  },
  {
    name: 'Products',
    href: '/products',
  },
] as NavigationBar[];

export default function DashboardLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar navigationList={NAVIGATION_LIST} />
      <main className='flex-grow'>
        <Outlet />
      </main>
    </div>
  );
}
