import { useState } from 'react';
import Pagination from '../../components/Pagination';

function UsersSection() {
  const [activePage, setActivePage] = useState(1);
  const LIST_USERS_STATIC = [
    {
      id: 27,
      firstName: 'Piper',
      lastName: 'Schowalter',
      maidenName: 'Wuckert',
      age: 47,
      gender: 'female',
      email: 'fokillq@amazon.co.jp',
      phone: '+60 785 960 7918',
      username: 'fokillq',
      password: 'xZnWSWnqH',
      birthDate: '1983-06-07',
      image: 'https://robohash.org/nequeodiosapiente.png',
      bloodGroup: 'A−',
      height: 197,
      weight: 71.5,
      eyeColor: 'Brown',
      hair: {
        color: 'Black',
        type: 'Curly',
      },
      domain: 'toplist.cz',
      ip: '100.159.51.104',
      address: {
        address: '1208 Elkader Court North',
        city: 'Nashville',
        coordinates: {
          lat: 36.080049,
          lng: -86.60116099999999,
        },
        postalCode: '37013',
        state: 'TN',
      },
      macAddress: '1F:42:5D:8C:66:3D',
      university: 'Sultanah Bahiyah Polytechnic',
      bank: {
        cardExpire: '09/22',
        cardNumber: '6762169351744592',
        cardType: 'maestro',
        currency: 'Ringgit',
        iban: 'BH05 STDW HECU HD4S L8U1 C6',
      },
      company: {
        address: {
          address: '600 West 19th Avenue',
          city: 'Anchorage',
          coordinates: {
            lat: 61.203115,
            lng: -149.894107,
          },
          postalCode: '99503',
          state: 'AK',
        },
        department: 'Human Resources',
        name: "O'Hara and Sons",
        title: 'Sales Representative',
      },
      ein: '11-3129153',
      ssn: '408-90-5986',
      userAgent:
        'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36',
    },
    {
      id: 28,
      firstName: 'Kody',
      lastName: 'Terry',
      maidenName: 'Larkin',
      age: 28,
      gender: 'male',
      email: 'xisherwoodr@ask.com',
      phone: '+81 859 545 8951',
      username: 'xisherwoodr',
      password: 'HLDqN5vCF',
      birthDate: '1979-01-09',
      image: 'https://robohash.org/consequunturabnon.png',
      bloodGroup: 'B−',
      height: 172,
      weight: 90.2,
      eyeColor: 'Blue',
      hair: {
        color: 'Brown',
        type: 'Wavy',
      },
      domain: 'elpais.com',
      ip: '51.102.180.216',
      address: {
        address: '210 Green Road',
        city: 'Manchester',
        coordinates: {
          lat: 41.7909099,
          lng: -72.51195129999999,
        },
        postalCode: '06042',
        state: 'CT',
      },
      macAddress: 'B4:B6:17:3C:41:E5',
      university: 'Science University of Tokyo',
      bank: {
        cardExpire: '05/23',
        cardNumber: '201443655632569',
        cardType: 'diners-club-enroute',
        currency: 'Yen',
        iban: 'GT70 4NNE RDSR 0AJV 6AQI 4XH1 RWOC',
      },
      company: {
        address: {
          address: '109 Summit Street',
          city: 'Burlington',
          coordinates: {
            lat: 44.4729749,
            lng: -73.2026566,
          },
          postalCode: '05401',
          state: 'VT',
        },
        department: 'Support',
        name: 'Leffler, Beatty and Kilback',
        title: 'Recruiting Manager',
      },
      ein: '09-1129306',
      ssn: '389-74-9456',
      userAgent:
        'Mozilla/6.0 (Macintosh; I; Intel Mac OS X 11_7_9; de-LI; rv:1.9b4) Gecko/2012010317 Firefox/10.0a4',
    },
  ];
  return (
    <>
      <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 pt-3'>
        {LIST_USERS_STATIC.map((person) => (
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
        ))}
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

export default function UsersPage() {
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-max flex flex-col gap-2 flex-1'>
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
