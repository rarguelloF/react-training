import { connect } from 'react-redux';

import Cart from './component';


function mapStateToProps(state) {
  return {
    products: state.cart.products,
  };
}

export default connect(mapStateToProps, null)(Cart);
