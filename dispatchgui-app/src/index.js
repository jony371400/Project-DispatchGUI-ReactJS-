import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './Asset/home-layout.css';
import './Asset/graph-layout.css';
import './Asset/graph-component.css';
import './Asset/control-layout.css';
import './Asset/control-component.css';

import Home from './pages/home/index'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // This comments avoid Hooks[useEffect] execute twice
  // <React.StrictMode>
  //   <Home></Home>
  // </React.StrictMode>
  <Home></Home>
);