import React from 'react';

import Pagination from 'src/components/Pagination';
import Product from 'src/components/Product';


function shouldDisplayProduct(product, filters) {
  const filterByCategory = (
    (!filters.category.mainDish && !filters.category.drink && !filters.category.dessert) ||
    (product.category === '1' && filters.category.mainDish) ||
    (product.category === '2' && filters.category.drink) ||
    (product.category === '3' && filters.category.dessert)
  );

  const filterByPrice = product.price <= filters.price;

  const filterBySearchTerm = product.name.toLowerCase()
    .includes(filters.searchTerm.toLowerCase());

  return filterByCategory && filterByPrice && filterBySearchTerm;
}

// See: https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle
export default class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts(this.props.page, 6);
  }

  render() {
    return (
      <div id="products">
        <h3 className="heading-2b">Productos</h3>
        <div className="products__list row">
          {this.props.products
            .filter(product => shouldDisplayProduct(product, this.props.filters))
            .map(product => <Product key={product.id} {...product} />)
          }
        </div>
        <Pagination />
      </div>
    );
  }
}
