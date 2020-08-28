import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = () => {

  let composeEnhancers = compose;
  let middleware = [thunk];

  if (process.env.NODE_ENV.toLowerCase().toLowerCase() !== 'production') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(rootReducer, composedEnhancers);
  return store;

}

export default configureStore;