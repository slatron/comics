import 'core-js/stable';
import "regenerator-runtime/runtime";

import React from 'react'
import ReactDOM from 'react-dom'
import ComicsPage from 'components/page_roots/ComicsPage/ComicsPage'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducer from 'store/reducers'

import 'styles/main.scss'

const store = createStore(allReducer)

ReactDOM.render(
  <Provider store={store}>
    <ComicsPage />
  </Provider>,
  document.getElementById('comics-page'))
