import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import Pagination from '../../components/Pagination';

interface ProductListSectionProps {
  query: string;
}

function ProductListSection({ query }: ProductListSectionProps) {
  const [activePage, setActivePage] = useState(1);
  const STATIC_PRODUCT_DATA = [
    {
      id: 1,
      name: 'Nomad Pouch',
      href: '#',
      price: 50,
      availability: 'White and Black',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
      imageAlt:
        'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    },
    {
      id: 2,
      name: 'Zip Tote Basket',
      href: '#',
      price: 140,
      availability: 'Washed Black',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
      imageAlt:
        'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    },
    {
      id: 3,
      name: 'Medium Stuff Satchel',
      href: '#',
      price: 220,
      availability: 'Blue',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
  ];

  return (
    <>
      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 pt-3'>
        {STATIC_PRODUCT_DATA.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='group text-sm'
          >
            <div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75'>
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className='w-full h-full object-center object-cover'
              />
            </div>
            <h3 className='mt-4 font-medium text-gray-900'>{product.name}</h3>
            <p className='text-gray-500 italic'>{product.availability}</p>
            <p className='mt-2 font-medium text-gray-900'>
              {product?.price?.toLocaleString('id-ID')}
            </p>
          </Link>
        ))}
      </div>
      <div className='sticky mt-auto bottom-0 bg-white w-full pb-3'>
        <Pagination
          currentPage={activePage}
          totalPages={10}
          onPageChange={setActivePage}
        />
      </div>
    </>
  );
}

interface SearchSectionProps {
  query: string;
  setQuery: (query: string) => void;
}

function SearchSection({
  query,
  setQuery = () => undefined,
}: SearchSectionProps) {
  return (
    <div className='w-full'>
      <label htmlFor='search' className='sr-only'>
        Search projects
      </label>
      <div className='relative text-indigo-200 focus-within:text-gray-400'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <MdSearch className='h-5 w-5' aria-hidden='true' />
        </div>
        <input
          id='search'
          name='search'
          className='block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Search'
          type='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-max flex flex-col gap-2 flex-1'>
      <div className='py-3 w-full'>
        <SearchSection query={searchQuery} setQuery={setSearchQuery} />
      </div>
      <ProductListSection query={searchQuery} />
    </div>
  );
}
