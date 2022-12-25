import { compose,applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import { persistStore , persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import logger from "redux-logger";
// import thunk from "redux-thunk";
import { rootReducers } from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware()
const middleware = [process.env.NODE_ENV==="development" && logger ,sagaMiddleware ].filter(Boolean);
const persistConfig = {
    key :'root',
    storage,
    whitelist :['cart']
}
const persistedReducer = persistReducer(persistConfig ,rootReducers)

const composedEnhancer = compose(applyMiddleware(...middleware))
export const store = createStore(persistedReducer , undefined ,composedEnhancer)
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);