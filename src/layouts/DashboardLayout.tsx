import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { NavigationList } from '../libs/navigation';

export default function DashboardLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar navigationList={NavigationList} />
      <main className='flex-grow flex flex-col'>
        <Outlet />
      </main>
    </div>
  );
}
