import React from 'react';

import Header from './Header';
import Filters from './Filters';
import ProductList from './ProductList';


export default function Shop() {
  return (
    <div className="col-md-9">
      <div id="showcase">
        <Header />
        <Filters />
        <ProductList />
      </div>
    </div>
  );
}
