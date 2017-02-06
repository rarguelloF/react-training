import React from 'react';

import Pagination from './Pagination';
import Product from './Product';

export default function Products() {
  return (
    <div id="products">
      <h3 className="heading-2b">Productos</h3>
      <div className="products__list row">

        {/* Render the following products (you may need more properties to render them properly) */}
        <Product
          name="Fabada"
          category="1"
          image="http://espanafascinante.com/wp-content/uploads/portada_blog_gastronomia_recetas_fabada_bi.jpg"
          price={2.5}
          measurement="2"
        />
        <Product
          name="Coca-cola"
          category="2"
          image="http://www.carrefour.es/supermercado/dyn/MEDIA_CustomProductCatalog/m11021209_l_000041.png"
          price={0.8}
          measurement="1"
        />
        <Product
          name="Yogur ecológico"
          category="3"
          image="http://www.cosasdecome.es/wp-content/uploads/2010/09/Yogur-ecologico-El-Gazul.jpg"
          price={1.2}
          measurement="1"
        />
        <Product
          name="Botella de agua"
          category="2"
          image="http://www.carrefour.es/supermercado/dyn/MEDIA_CustomProductCatalog/m11011384_l_120204.png?4"
          price={0.8}
          measurement="1"
        />
        <Product
          name="Rabo de ternera en salsa"
          category="1"
          image="http://jornadasgastronomicas.org/wp-content/uploads/2014/07/Rabo-de-ternera-en-salsa.jpg"
          price={2.5}
          measurement="2"
        />
        <Product
          name="Natillas caseras"
          category="3"
          image="https://www.recetin.com/wp-content/uploads/2011/10/natillas_en_thermomix.jpg"
          price={1.5}
          measurement="1"
        />
      </div>

      <Pagination />
    </div>
  );
}
