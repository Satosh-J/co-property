import {combineReducers} from "redux";
import Auth from "./Auth";
import App from "./App";
import Setting from "./Setting";

const reducers = combineReducers({
    auth: Auth,
    app: App,
    setting: Setting,
});

export default reducers;
