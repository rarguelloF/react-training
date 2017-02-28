// ES6: import the default export from 'react' module and save it a variable named React
import React from 'react';

// ES6: import the non-default export 'render' from 'react-dom' module
import { render } from 'react-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = (
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);

render(App, document.getElementById('root'));
