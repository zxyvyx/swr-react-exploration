import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import FullLoading from '../components/Loading/FullLoading';

const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'));

const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const UsersPage = lazy(() => import('../pages/UsersPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const DetailProductPage = lazy(
  () => import('../pages/ProductsPage/DetailProductPage')
);

export default function AuthenticatedRoute() {
  return (
    <Routes>
      {/* Dashboard Mode */}
      <Route
        path='/'
        element={
          <Suspense fallback={<FullLoading isFullScreen />}>
            <DashboardLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<FullLoading isFullScreen />}>
              <DashboardPage />
            </Suspense>
          }
        />
        <Route
          path='/users'
          element={
            <Suspense fallback={<FullLoading isFullScreen />}>
              <UsersPage />
            </Suspense>
          }
        />
        <Route path='/products'>
          <Route
            index
            element={
              <Suspense fallback={<FullLoading isFullScreen />}>
                <ProductsPage />
              </Suspense>
            }
          />
          <Route
            path=':id'
            element={
              <Suspense fallback={<FullLoading isFullScreen />}>
                <DetailProductPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  );
}
