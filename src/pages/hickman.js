import React from 'react'
import ReactDOM from 'react-dom'
import HickmanPage from 'components/page_roots/HickmanPage/HickmanPage'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducer from 'store/reducers'

import 'styles/main.scss'

const store = createStore(allReducer)

ReactDOM.render(
  <Provider store={store}>
    <HickmanPage />
  </Provider>,
  document.getElementById('hickman-page'))
