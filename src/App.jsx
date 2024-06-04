import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Loader from './components/Loader/Loader';
import PrivateRoute from './routes/PrivateRoute';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const AllOrdersPage = lazy(() => import('./pages/AllOrdersPage/AllOrdersPage'));
const AllProductsPage = lazy(() => import('./pages/AllProductsPage/AllProductsPage'));
const AllSuppliersPage = lazy(() => import('./pages/AllSuppliersPage/AllSuppliersPage'));
const CustomersDataPage = lazy(() => import('./pages/CustomersDataPage/CustomersDataPage'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><SharedLayout /></PrivateRoute>}>
            <Route path="dashboard" element={<DashboardPage />} />
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
