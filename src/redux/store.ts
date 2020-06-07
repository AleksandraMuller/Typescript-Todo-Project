import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [thunk];

const logger = createLogger();

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

// if (window.navigator.userAgent.includes('Chrome')) {
//   const store = createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(...middlewares, logger),
//       (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//         (window as any).__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
// } else {
//   const  store = createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(...middlewares, logger)
//     )
//   );
// }

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares, logger),
    window.navigator.userAgent.includes('Chrome')
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  )
);

export const persistor = persistStore(store);

export default store;
