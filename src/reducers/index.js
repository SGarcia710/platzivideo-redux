import data from './data'
import modal from './modal'
import isLoading from './is-loading'

// import { combineReducers } from 'redux' //combina n cantida de reducers en uno solo
import { combineReducers } from 'redux-immutable' //combina n cantida de reducers en uno solo pero lo hace root e immutable

const rootReducer = combineReducers({
  data, //lo mismo que decir data: data o datos: data.
  modal,
  isLoading
})

export default rootReducer; 