import React from 'react';

import Header from './Header';
import Filters from './Filters';
import Products from './Products';


export default function Shop() {
  return (
    <div className="col-md-9">
      <div id="showcase">
        <Header />
        <Filters />
        <Products />
      </div>
    </div>
  );
}
