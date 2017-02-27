import React from 'react';

import CategoryFilter from 'src/components/CategoryFilter';
import PriceFilter from 'src/components/PriceFilter';


export default function GalleryFilters() {
  return (
    <div className="filters-box">
      <h3 className="heading-2b">Afina tu búsqueda</h3>
      <div className="row">
        <CategoryFilter />
        <PriceFilter maxPrice={20} />
        <div className="search-box col-md-3">
          <h4 className="heading-4">Buscador</h4>
          <div className="input-search-wrap">
            <input type="search" placeholder="Quiero pedir..." />
            <i className="fa fa-search" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
