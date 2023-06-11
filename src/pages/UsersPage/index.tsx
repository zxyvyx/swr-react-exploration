import { useState } from 'react';
import useSWR from 'swr';
import { MdSmsFailed } from 'react-icons/md';
import Pagination from '../../components/Pagination';
import { getUsers } from '../../libs/user';
import { User } from '../../libs/interfaces/Users';
import FullLoading from '../../components/Loading/FullLoading';

function UsersSection() {
  const [activePage, setActivePage] = useState(1);
  const LIMIT_PER_PAGE = 12;

  const {
    data: usersData,
    isLoading,
    error,
  } = useSWR(['users', activePage], () =>
    getUsers(LIMIT_PER_PAGE, activePage + LIMIT_PER_PAGE)
  );

  if (isLoading)
    return (
      <div className='flex flex-grow items-center justify-center h-full'>
        <FullLoading />
      </div>
    );

  if (error)
    return (
      <>
        <div className='flex flex-col gap-2 items-center pt-10 justify-center text-center'>
          <MdSmsFailed className='text-8xl text-red-200' />
          <div className='font-bold text-2xl text-red-400'>
            Failed to get data M
          </div>
        </div>
        <div className='sticky bottom-0 w-full bg-white pb-3 mt-auto'>
          <Pagination
            currentPage={activePage}
            totalPages={10}
            onPageChange={setActivePage}
          />
        </div>
      </>
    );

  if (usersData) {
    return (
      <>
        <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 pt-3'>
          {usersData?.users?.length ? (
            usersData.users.map((person: User) => (
              <li key={person.id}>
                <div className='space-y-4'>
                  <div className='aspect-w-3 aspect-h-2'>
                    <img
                      className='object-cover shadow-lg rounded-lg'
                      src={person.image}
                      alt=''
                    />
                  </div>

                  <div className='space-y-2'>
                    <div className='text-lg leading-6 font-medium space-y-1'>
                      <h3>
                        {person.firstName} {person.lastName}
                      </h3>
                      <p className='text-indigo-600'>{person.gender}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div>No users found</div>
          )}
        </ul>
        <div className='sticky bottom-0 w-full bg-white pb-3 mt-auto'>
          <Pagination
            currentPage={activePage}
            totalPages={10}
            onPageChange={setActivePage}
          />
        </div>
      </>
    );
  }
}

export default function UsersPage() {
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full flex flex-col gap-2 flex-1'>
      <div className='space-y-12'>
        <div className='space-y-5 sm:space-y-4'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
            Our Team
          </h2>
          <p className='text-xl text-gray-500'>
            Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
            ultricies donec risus sodales. Tempus quis et.
          </p>
        </div>
      </div>
      <UsersSection />
    </div>
  );
}
