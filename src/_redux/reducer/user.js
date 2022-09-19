import { USER_INFO } from '../action/user/types';
const initialPendingState = {
  isOtpPending: false,
  isOptVerificationPending: null,
  isUserRegistered: null,
  isUserRegisterPending: null,
  isBoughtExperiencePending: null,
  isUserGetPending: null,
};

const DEFAULT_STATE = {
  ...initialPendingState,
  user: null,
  isAuthenticated: null,
  isUserLoginModal: null,
  profile: null,
  defaultProfilePics: [],
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    default: {
      return state;
    }
  }
};
