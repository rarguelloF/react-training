import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'src/actionCreators/gallery';
import SearchFilter from './component';


function mapDispatchToProps(dispatch) {
  return {
    changeSearchTerm: bindActionCreators(actionCreators.changeSearchFilter, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(SearchFilter);
