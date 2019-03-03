import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
// import data from '../api.json'; Estos datos son de carga inicial, serian los que llegan desde backend en el momento que la app carga.
// console.log('Hola mundo!' )
import { Provider } from 'react-redux'
// import data from '../schemes/index' //la data la usa cada reducer.

import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index'
import { Map as map } from 'immutable'

//middlewares
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'


// function logger({ getState, dispatch}) {
//   return (next) => {
//     return (action) =>{
//       console.log('Este es el estado viejo: ', getState().toJS());
//       console.log('Vamos a enviar esta accion: ', action);
//       const value = next(action);
//       console.log('Este es el estado nuevo: ', getState().toJS());
//       return value;
//     }
//   }
// }


//middleware Logger hecho en ecmascript 6  
// const logger = ({ getState, dispatch}) => next => action => {
//   console.log('Old State: ', getState().toJS());
//   console.log('Action sent: ', action);
//   const value = next(action);
//   console.log('New State: ', getState().toJS());
//   return value;
// }

// console.log(data)
// console.log(data)

// const initialState = {
//   data: {
//     // ...data, dejo de usar los datos de la API, y empleo los normalizados
//     entities: data.entities,
//     categories: data.result.categories,
//     search: [],
//   },
//   modal: {
//     visibility: false,
//     mediaId: null,
//   }
// }

const store = createStore(
  // reducer,
  // initialState,
  // enhancer
  reducer,
  map(),
  composeWithDevTools(//con esto ya incluyo las herramientas de desarrollo de redux 
    applyMiddleware(logger, thunk)
  )
  //Aqui mando un mapa, ya que lo ideal es que sea inmutable el estado 
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

// console.log(store.getState())

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
//hoc: high order component : Provider
render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer);