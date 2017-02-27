// ES6: import the default export from 'react' module and save it a variable named React
import React from 'react';

// ES6: import the non-default export 'render' from 'react-dom' module
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

// Import styles
import './styles/main.css';

// Import components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = (
  <Provider store={store}>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>
);

render(App, document.getElementById('root'));
