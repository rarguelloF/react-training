import React from 'react';

import CategoryFilter from 'src/components/CategoryFilter';
import PriceFilter from 'src/components/PriceFilter';
import SearchFilter from 'src/components/SearchFilter';

export default function GalleryFilters() {
  return (
    <div className="filters-box">
      <h3 className="heading-2b">Afina tu búsqueda</h3>
      <div className="row">
        <CategoryFilter />
        <PriceFilter maxPrice={20} />
        <SearchFilter />
      </div>
    </div>
  );
}
