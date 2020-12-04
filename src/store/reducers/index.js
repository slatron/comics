// This file combines all store reducers to a single export

import counterReducer from './counter'
import lightboxReducer from './lightbox'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  lightbox: lightboxReducer
})

export default allReducers
