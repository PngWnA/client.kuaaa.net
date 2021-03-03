import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from "./modules";
import {createStore} from "redux";
import {Provider} from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);