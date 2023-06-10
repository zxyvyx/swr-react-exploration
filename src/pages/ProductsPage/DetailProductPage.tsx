import { useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function DetailProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!id) {
      navigate('/products');
    }
  }, [id, navigate]);

  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
      DetailProductPage {id}
    </div>
  );
}
