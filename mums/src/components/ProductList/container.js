import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'src/actionCreators/gallery';

import ProductList from './component';


function mapStateToProps(state) {
  return {
    products: state.gallery.products,
    page: state.gallery.page,
    filters: state.gallery.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: bindActionCreators(actionCreators.fetchProducts, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
