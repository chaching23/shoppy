import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from ".";

const middleware = [thunk, logger];
const initialState = {};

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;