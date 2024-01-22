import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import ActionTypes from '../constants/actionTypes';

// const jwtChecker = store => next => action => {
//   let result = next(action)
//   if (action.type && typeof (action.type) === "string" && action.type.includes("FAILURE") && action.payload/*.response*/ && action.payload/*.response.status*/ === 401) {
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('email');
//     result = next({ type: ActionTypes.AUTH_LOGOUT.SUCCESS })
//   }
//   return result
// }

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(...middlewares))
);


export default store;