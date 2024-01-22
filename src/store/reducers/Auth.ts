import { AnyAction } from "redux"
import ActionTypes from "../constants/ActionTypes"

import imgSampleAvatar from "assets/images/avatar-sample.jpg"

const INIT_STATE = {
    signupStep: 0,
    profile: {
        firstName: 'Kyle',
        lastName: 'Kelly',
        email: 'hello@digitalsolutions.dev',
        phone: '12345678',
        avatar: imgSampleAvatar,
    },
    signUpSuccess: false,
    showMessage: false
};
  
export default (state = INIT_STATE, action: AnyAction) => {
    switch (action.type) {
      case ActionTypes.SIGNUP_STEP: {
        return {
          ...state,
          signupStep: action.payload,
        };
      }
      default:
        return state;
    }
}
  