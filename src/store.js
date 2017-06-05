import {createStore,combineReducers,applyMiddleware} from "redux";
import nameReducer from "./reducers/user-reducer";
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
const store = createStore(
    combineReducers({userdetails:nameReducer}),
    {},
    applyMiddleware(logger(),thunk,promise())
);

export default store;