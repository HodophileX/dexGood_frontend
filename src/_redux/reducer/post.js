const initialPendingState = {
  isPostPending: false,
  isVerificationPending: false,
};

const DEFAULT_STATE = {
  ...initialPendingState,
  blog: null,
};

export const postReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
