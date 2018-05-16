import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./Main";
import {createStore} from 'redux';
import Provider from "react-redux/es/components/Provider";
import AppReducer from "./appreducer/AppReducer";
import BrowserRouter from "react-router-dom/BrowserRouter";

const store = createStore(AppReducer);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));