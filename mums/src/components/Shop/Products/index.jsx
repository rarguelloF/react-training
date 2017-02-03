import React from 'react';

import Pagination from './Pagination';

export default function Products() {
  return (
    <div id="products">
      <h3 className="heading-2b">Productos</h3>
      <div className="products__list row">

        {/* Render the following products (you may need more properties to render them properly)
        <Product name="Fabada" />
        <Product name="Coca-cola" />
        <Product name="Yogur ecológico" />
        <Product name="Botella de agua" />
        <Product name="Rabo de ternera en salsa" />
        <Product name="Natillas caseras" />
        */}
      </div>

      <Pagination />
    </div>
  );
}
