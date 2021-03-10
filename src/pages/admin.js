import 'core-js/stable';
import "regenerator-runtime/runtime";

import React from 'react'
import ReactDOM from 'react-dom'
import AdminPage from 'components/page_roots/AdminPage/AdminPage'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducer from 'store/reducers'

import 'styles/main.scss'

const store = createStore(allReducer)

ReactDOM.render(
  <Provider store={store}>
    <AdminPage />
  </Provider>,
  document.getElementById('admin-page'))
