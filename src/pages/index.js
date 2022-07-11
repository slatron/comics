import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from 'components/page_roots/AppRouter'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducer from 'store/reducers'

import 'styles/main.scss'

const store = createStore(allReducer)

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app-container'))
