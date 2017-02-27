import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProductToCart } from '../../../actionCreators/shop';

import Product from './component';


function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: bindActionCreators(addProductToCart, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Product);
