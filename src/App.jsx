import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const DasboardPage = lazy(() => import('./pages/DasboardPage/DasboardPage'));
const AllOrdersPage = lazy(() => import('./pages/AllOrdersPage/AllOrdersPage'));
const AllProductsPage = lazy(() => import('./pages/AllProductsPage/AllProductsPage'));
const AllSuppliersPage = lazy(() => import('./pages/AllSuppliersPage/AllSuppliersPage'));
const CustomersDataPage = lazy(() => import('./pages/CustomersDataPage/CustomersDataPage'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SharedLayout />}>
            <Route path="dashboard" element={<DasboardPage />} />
            <Route path="orders" element={<AllOrdersPage />} />
            <Route path="products" element={<AllProductsPage />} />
            <Route path="suppliers" element={<AllSuppliersPage />} />
            <Route path="customers" element={<CustomersDataPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
