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
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
);