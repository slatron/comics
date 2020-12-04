import React from 'react'
import ReactDOM from 'react-dom'
import RemRankPage from 'components/page_roots/RemRankPage/RemRankPage'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducer from 'store/reducers'

import 'styles/main.scss'

const store = createStore(allReducer)

ReactDOM.render(
  <Provider store={store}>
    <RemRankPage />
  </Provider>,
  document.getElementById('rem-rank-page'))
