import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'src/actionCreators/gallery';
import PriceFilter from './component';


function mapStateToProps(state) {
  return {
    selectedPrice: state.gallery.filters.price,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePrice: bindActionCreators(actionCreators.changePriceFilter, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceFilter);
