//estado global es un obj - que le pregunte a la api
//reducer es el que maneja el estado global
// en una action , si modificamos algo necesitamos el payload
//
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    );
    export default store;
    