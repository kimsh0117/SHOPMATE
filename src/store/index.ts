import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { rootReducer } from "store/reducers";
import rootSaga from "store/sagas";

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware, logger));

  const store = createStore(rootReducer, enhancers);

  rootSaga.map(sagaMiddleware.run);

  return store;
}

const rootStore = configureStore();

export default rootStore;
