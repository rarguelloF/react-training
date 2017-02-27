import React from 'react';

import Pagination from './Pagination';
import Product from './Product';


// See: https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle
export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/products')
    .then(
      response => response.json()
                          .then(products => this.setState({ products })),
      error => console.error(`Failed fetching products from server: ${error}`),
    );
  }

  render() {
    return (
      <div id="products">
        <h3 className="heading-2b">Productos</h3>
        <div className="products__list row">
          {this.state.products.map(product => <Product key={product.id} {...product} />)}
        </div>
        <Pagination />
      </div>
    );
  }
}
