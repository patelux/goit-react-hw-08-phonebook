import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';

import {  store, persistor  } from './redux/store';

import { App } from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='goit-react-hw-08-phonebook'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>

);
