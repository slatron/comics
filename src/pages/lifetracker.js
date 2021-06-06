import React from 'react'
import ReactDOM from 'react-dom'
import LifetrackerPage from 'components/page_roots/LifetrackerPage/LifetrackerPage'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducer from 'store/reducers'

import 'styles/main.scss'

const store = createStore(allReducer)

ReactDOM.render(
  <Provider store={store}>
    <LifetrackerPage />
  </Provider>,
  document.getElementById('lifetracker'))
