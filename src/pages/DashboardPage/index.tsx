import { Link } from 'react-router-dom';
import { Product } from '../../libs/interfaces/Products';
import Footer from '../../components/Footer';

function HeroSection() {
  const STATIC_TESTIMONIAL_DATA = [
    {
      id: 1,
      quote:
        'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
      attribution: 'Sarah Peters, New Orleans',
    },
    {
      id: 2,
      quote:
        'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!',
      attribution: 'Kelly McPherson, Chicago',
    },
    {
      id: 3,
      quote:
        'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.',
      attribution: 'Chris Paul, Phoenix',
    },
  ];

  return (
    <div className='bg-white relative overflow-hidden'>
      {/* Decorative background image and gradient */}
      <div aria-hidden='true' className='absolute inset-0'>
        <div className='absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8'>
          <img
            src='https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg'
            alt=''
            className='w-full h-full object-center object-cover'
          />
        </div>
        <div className='absolute inset-0 bg-white bg-opacity-75' />
        <div className='absolute inset-0 bg-gradient-to-t from-white via-white' />
      </div>

      {/* Callout */}
      <section
        aria-labelledby='sale-heading'
        className='relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8'
      >
        <div className='max-w-2xl mx-auto lg:max-w-none'>
          <h2
            id='sale-heading'
            className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'
          >
            Get 25% off during our one-time sale
          </h2>
          <p className='mt-4 max-w-xl mx-auto text-xl text-gray-600'>
            Most of our products are limited releases that won&lsquo;t come
            back. Get your favorite items while they&lsquo;re in stock.
          </p>
          <Link
            to='/products'
            className='mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto'
          >
            Get access to our one-time sale
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby='testimonial-heading'
        className='relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8'
      >
        <div className='max-w-2xl mx-auto lg:max-w-none'>
          <h2
            id='testimonial-heading'
            className='text-2xl font-extrabold tracking-tight text-gray-900'
          >
            What are people saying?
          </h2>

          <div className='mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8'>
            {STATIC_TESTIMONIAL_DATA.map((testimonial) => (
              <blockquote key={testimonial.id} className='sm:flex lg:block'>
                <svg
                  width={24}
                  height={18}
                  viewBox='0 0 24 18'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='flex-shrink-0 text-gray-300'
                >
                  <path
                    d='M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z'
                    fill='currentColor'
                  />
                </svg>
                <div className='mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0'>
                  <p className='text-lg text-gray-600'>{testimonial.quote}</p>
                  <cite className='mt-4 block font-semibold not-italic text-gray-900'>
                    {testimonial.attribution}
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function HighlightSection() {
  const STATIC_PRODUCTS = [
    {
      id: 12,
      title: 'Brown Perfume',
      description: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
      price: 40,
      discountPercentage: 15.66,
      rating: 4,
      stock: 52,
      brand: 'Royal_Mirage',
      category: 'fragrances',
      thumbnail: 'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/12/1.jpg',
        'https://i.dummyjson.com/data/products/12/2.jpg',
        'https://i.dummyjson.com/data/products/12/3.png',
        'https://i.dummyjson.com/data/products/12/4.jpg',
        'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
      ],
    },
    {
      id: 13,
      title: 'Fog Scent Xpressio Perfume',
      description:
        'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
      price: 13,
      discountPercentage: 8.14,
      rating: 4.59,
      stock: 61,
      brand: 'Fog Scent Xpressio',
      category: 'fragrances',
      thumbnail: 'https://i.dummyjson.com/data/products/13/thumbnail.webp',
      images: [
        'https://i.dummyjson.com/data/products/13/1.jpg',
        'https://i.dummyjson.com/data/products/13/2.png',
        'https://i.dummyjson.com/data/products/13/3.jpg',
        'https://i.dummyjson.com/data/products/13/4.jpg',
        'https://i.dummyjson.com/data/products/13/thumbnail.webp',
      ],
    },
    {
      id: 14,
      title: 'Non-Alcoholic Concentrated Perfume Oil',
      description:
        'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
      price: 120,
      discountPercentage: 15.6,
      rating: 4.21,
      stock: 114,
      brand: 'Al Munakh',
      category: 'fragrances',
      thumbnail: 'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/14/1.jpg',
        'https://i.dummyjson.com/data/products/14/2.jpg',
        'https://i.dummyjson.com/data/products/14/3.jpg',
        'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
      ],
    },
    {
      id: 15,
      title: 'Eau De Perfume Spray',
      description:
        'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
      price: 30,
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: 'Lord - Al-Rehab',
      category: 'fragrances',
      thumbnail: 'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/15/1.jpg',
        'https://i.dummyjson.com/data/products/15/2.jpg',
        'https://i.dummyjson.com/data/products/15/3.jpg',
        'https://i.dummyjson.com/data/products/15/4.jpg',
        'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
      ],
    },
  ] as Product[];

  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-2.5'>
        <div className='md:flex md:items-center md:justify-between'>
          <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
            Trending products
          </h2>
          <Link
            to='/products'
            className='hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block'
          >
            Shop the collection<span aria-hidden='true'> &rarr;</span>
          </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8'>
          {STATIC_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className='group relative col-span-1 flex flex-col gap-1.5'
            >
              <div className='w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80'>
                <img
                  src={product.thumbnail}
                  alt={product?.title || '-'}
                  className='w-full h-full object-center object-cover'
                />
              </div>
              <h3 className='text-sm text-gray-700'>
                <Link to={`/products/${product.id}`}>
                  <span className='absolute inset-0' />
                  <div className='line-clamp-1'>{product?.title || '-'}</div>
                </Link>
              </h3>
              <p className='text-sm text-gray-500 line-clamp-1'>
                {product?.brand || '-'}
              </p>
              <p className='text-sm font-medium text-gray-900'>
                Rp {product?.price?.toLocaleString('id-ID') || 0}
              </p>
            </div>
          ))}
        </div>

        <div className='text-sm md:hidden'>
          <Link
            to='/products'
            className='font-medium text-indigo-600 hover:text-indigo-500'
          >
            Shop the collection<span aria-hidden='true'> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col gap-4'>
      <HeroSection />
      <HighlightSection />
      <Footer />
    </div>
  );
}
