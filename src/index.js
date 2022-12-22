import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

// import CartProvider from './context/cart.context';
import reportWebVitals from './reportWebVitals';

import { store , persistor } from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate persistor={persistor}>
     <BrowserRouter>
    
    
    
     <App />
     
    
     
     
    </BrowserRouter>
    </PersistGate>
    </Provider>
      </React.StrictMode>
);
// ReactDOM.render( <React.StrictMode>
//   <BrowserRouter>
  
//   <App />
//   </BrowserRouter>
//     </React.StrictMode> , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
