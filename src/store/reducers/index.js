// This file combines all store reducers to a single export

import counterReducer from './counter'
import lightboxReducer from './lightbox'
import windowshadeReducer from './windowshade'
import drawerReducer from './drawer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  lightbox: lightboxReducer,
  windowshade: windowshadeReducer,
  drawer: drawerReducer
})

export default allReducers
