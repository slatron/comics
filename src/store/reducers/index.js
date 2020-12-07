// This file combines all store reducers to a single export
import drawerReducer from './drawer'
import lightboxReducer from './lightbox'
import windowshadeReducer from './windowshade'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  drawer: drawerReducer,
  lightbox: lightboxReducer,
  windowshade: windowshadeReducer
})

export default allReducers
