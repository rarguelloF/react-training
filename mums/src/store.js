import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';
import initialState from './initialState';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(rootReducer, initialState, enhancers);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
