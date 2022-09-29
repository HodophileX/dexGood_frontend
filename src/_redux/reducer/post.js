import { GET_POST_PENDING, POST_INFO } from '../action/posts/type';

const initialPendingState = {
  isPostPending: false,
  isVerificationPending: false,
};

const DEFAULT_STATE = {
  ...initialPendingState,
  posts: null,
};

export const postReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case POST_INFO:
      return {
        ...state,
        post: action.payload,
      };
    case GET_POST_PENDING:
      return {
        ...state,
        isPostPending: true,
      };
    default: {
      return state;
    }
  }
};
