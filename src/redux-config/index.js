import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";

import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from "redux-persist-seamless-immutable";

import { createLogger } from "redux-logger";
import { rootReducer } from "../stores";
import rootSagas from "../sagas";

import { Provider } from "react-redux";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const transformerConfig = {
  whitelistPerReducer: {
    auth: ["userSession"],
  },
  blacklistPerReducer: {
    //indicate which one to remove
  },
};

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator(transformerConfig)],
};

const pReducer = persistReducer(persistConfig, rootReducer(history));

const middleware = [
  createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error }),
  sagaMiddleware,
  routerMiddleware(history),
];
const enhancers = compose(
  applyMiddleware(...middleware),
  window.window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

//CREATE STORE
const store = createStore(pReducer, {}, enhancers);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { Provider, store, history, persistor };
