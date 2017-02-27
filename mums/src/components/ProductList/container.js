import { connect } from 'react-redux';

import ProductList from './component';


function mapStateToProps(state) {
  return {
    filters: state.gallery.filters,
  };
}

export default connect(mapStateToProps, null)(ProductList);
