import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProductToCart } from 'src/actionCreators/gallery';
import Product from './component';


function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: bindActionCreators(addProductToCart, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Product);
