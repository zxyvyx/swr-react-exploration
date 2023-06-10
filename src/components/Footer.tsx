import { Link } from 'react-router-dom';
import { NavigationList, SocialList } from '../libs/navigation';

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          {NavigationList.map((navigation) => (
            <div key={navigation.name} className='px-5 py-2'>
              <Link
                to={navigation.href}
                className='text-base text-gray-500 hover:text-gray-900'
              >
                {navigation.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className='mt-8 flex justify-center space-x-6'>
          {SocialList.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{social.name}</span>
              <div>{social?.name?.charAt(0) || '-'}</div>
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-base text-gray-400'>
          &copy; {new Date().getFullYear()} Workflow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
