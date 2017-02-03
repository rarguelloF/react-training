// ES6: import the default export from 'react' module and save it a variable named React
import React from 'react';

// ES6: import the non-default export 'render' from 'react-dom' module
import { render } from 'react-dom';

// Import styles
import './styles/main.css';

// Import components
import Main from './components/Main';

const App = (
  <div>
    <Main />
  </div>
);

render(App, document.getElementById('root'));
