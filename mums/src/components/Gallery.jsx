import React from 'react';

import GalleryHeader from './GalleryHeader';
import GalleryFilters from './GalleryFilters';
import ProductList from './ProductList';


export default function Shop() {
  return (
    <div className="col-md-9">
      <div id="showcase">
        <GalleryHeader />
        <GalleryFilters />
        <ProductList />
      </div>
    </div>
  );
}
