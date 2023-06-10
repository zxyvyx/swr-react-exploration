import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';

function ProductListSection() {
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

export default function ProductsPage() {
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-max flex flex-col gap-2 flex-1'>
      <ProductListSection />
    </div>
  );
}
