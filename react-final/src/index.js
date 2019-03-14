import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { contacts } from './reducers/contacts';
import { App } from './components/App';

const store = createStore(contacts);

render(
  <Provider store={store}>
    <App />
    <Form />
  </Provider>,
  document.getElementById('root')
);
