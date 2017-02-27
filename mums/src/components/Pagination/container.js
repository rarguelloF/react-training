import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'src/actionCreators/gallery';

import Pagination from './component';


function mapStateToProps(state) {
  return {
    totalProducts: state.gallery.total,
    currentPage: state.gallery.page,
    products: state.gallery.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePage: bindActionCreators(actionCreators.changePage, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
