import React from 'react';

import Product from './Product';
import GalleryPagination from './GalleryPagination';


export default function GalleryProducts() {
  return (
    <div id="products">
      <h3 className="heading-2b">Productos</h3>
      <div className="products__list row">
        <Product name="Fabada" category="1" measurement="1" image="" price="" />
        <Product name="Fabada" category="1" measurement="1" image="" price="" />
        <Product name="Fabada" category="1" measurement="1" image="" price="" />
        <Product name="Fabada" category="1" measurement="1" image="" price="" />
        <Product name="Fabada" category="1" measurement="1" image="" price="" />
        <Product name="Fabada" category="1" measurement="1" image="" price="" />
      </div>

      <GalleryPagination />
    </div>
  );
}
