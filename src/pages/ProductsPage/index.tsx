import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { MdFilterNone, MdSearch, MdSmsFailed } from 'react-icons/md';
import Pagination from '../../components/Pagination';
import { getProductsBySearch } from '../../libs/product';
import FullLoading from '../../components/Loading/FullLoading';
import { Product } from '../../libs/interfaces/Products';
import { useDebounceString } from '../../hooks/useDebounceString';

interface ProductListSectionProps {
  query: string;
}

function ProductListSection({ query }: ProductListSectionProps) {
  const [activePage, setActivePage] = useState(1);
  const LIMIT_PER_PAGE = 12;
  const debouncedSearch = useDebounceString(query, 500);

  useEffect(() => {
    setActivePage(1);
  }, [debouncedSearch]);

  const {
    data: productsData,
    isLoading,
    error,
  } = useSWR(['products', activePage, debouncedSearch], () =>
    getProductsBySearch(
      LIMIT_PER_PAGE,
      activePage > 1 ? activePage + LIMIT_PER_PAGE : activePage,
      debouncedSearch
    )
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
            Failed to get data
          </div>
        </div>
        <div className='sticky bottom-0 w-full bg-white pb-3 mt-auto'>
          <Pagination
            currentPage={
              activePage < error?.response?.data?.total ? activePage : 1
            }
            totalPages={
              error?.response?.data?.total
                ? error.response.data.total / LIMIT_PER_PAGE
                : 1
            }
            onPageChange={setActivePage}
          />
        </div>
      </>
    );

  return (
    <>
      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 pt-3'>
        {productsData?.products?.length ? (
          productsData.products.map((product: Product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className='group text-sm'
            >
              <div className='w-full aspect-square rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75'>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className='w-full h-full object-center object-cover'
                />
              </div>
              <h3 className='mt-4 font-medium text-gray-900'>
                {product.title}
              </h3>
              <p className='text-gray-500 italic'>{product.brand}</p>
              <p className='mt-2 font-medium text-gray-900'>
                Rp {product?.price?.toLocaleString('id-ID')}
              </p>
            </Link>
          ))
        ) : (
          <div className='flex flex-col gap-2 items-center pt-10 justify-center text-center'>
            <MdFilterNone className='text-8xl text-slate-200' />
            <div className='font-bold text-2xl text-slate-400'>
              No products found
            </div>
          </div>
        )}
      </div>
      <div className='sticky mt-auto bottom-0 bg-white w-full pb-3'>
        <Pagination
          currentPage={activePage}
          totalPages={productsData.total / LIMIT_PER_PAGE}
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
