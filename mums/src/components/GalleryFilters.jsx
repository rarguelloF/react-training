import React from 'react';

import CategoryFilter from 'src/components/CategoryFilter';


export default function GalleryFilters() {
  return (
    <div className="filters-box">
      <h3 className="heading-2b">Afina tu búsqueda</h3>
      <div className="row">
        <CategoryFilter />
        <div className="col-md-3">
          <div className="price-box">
            <h4 className="heading-4">Precio</h4>
            <div className="price">100 €</div>
            <input
              type="range"
              id="price-filter"
              className="tip fill fill-replace"
              value="100"
              step="1"
              min="0"
              max="100"
            />
          </div>
        </div>
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
