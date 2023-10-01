import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const ShopCart = React.lazy(() => import('shop-cart/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop-cart">ShopCart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/shop-cart" element={<ShopCart />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
