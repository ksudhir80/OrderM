import React, {  Suspense, lazy ,memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';

import Navigationbar from './NavigationBar';



const Home = lazy(() => import('./Home'));
const CustomerDashboard = lazy(() => import('./customer/CustomerDashboard'));
const ProductDashboard = lazy(() => import('./Product/ProductDashboard'));

const AppOrderM = () => {


  return (
 
     
      <Router>
      <Navigationbar></Navigationbar>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/product" element={<ProductDashboard />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      </Suspense>
    </Router>
    

  );
};

export default memo(AppOrderM);
