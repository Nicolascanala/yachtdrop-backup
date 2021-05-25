import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CurrentUserProvider } from '@assets/utils/CurrentUser';
import { CartProvider } from '@assets/utils/CartContext';


import './index.css';

ReactDOM.render(
  <CartProvider>
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>
  </CartProvider>,
  document.getElementById('root')
);
