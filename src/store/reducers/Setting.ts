import { AnyAction } from "redux"
import ActionTypes from "../constants/ActionTypes"

const INIT_STATE = {
    isMiniSidebar: false,
};
  
export default (state = INIT_STATE, action: AnyAction) => {
    switch (action.type) {
      case ActionTypes.MINI_SIDEBAR: {
        return {
          ...state,
          isMiniSidebar: action.payload,
        };
      }
      default:
        return state;
    }
}
  