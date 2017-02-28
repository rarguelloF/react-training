import React from 'react';

import GalleryFilters from './GalleryFilters';
import GalleryProducts from './GalleryProducts';


export default function Gallery() {
  return (
    <div className="col-md-9">
      <div id="showcase">
        <div className="heading-box">
          <h2 className="heading-2">
            <i className="fa fa-cutlery" aria-hidden="true" />
            ¿Qué te apetece comer hoy?
          </h2>
          <p>
            Selecciona los productos para añadirlos a la cesta y benefíciate de nuestras ofertas.
          </p>
        </div>

        <GalleryFilters />
        <GalleryProducts />

      </div>
    </div>
  );
}
