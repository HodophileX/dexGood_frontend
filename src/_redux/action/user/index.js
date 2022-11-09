const { reduxAction } = require('../base');

import {
  USER_INFO,
  USER_INFO_GET_PENDING,
  USER_LOGOUT,
  USER_OTP_VERIFICATION_PENDING,
  USER_OTP_PENDING,
  USER_REGISTER_PENDING,
  USER_REGISTER_STATUS,
  DEFAULT_PROFILE_PICS,
  USER_LOGIN_MODAL,
} from './types';

import {
  GET_USER_GQL,
  LOGIN_GQL,
  UPDATE_USER_GQL,
  VERIFY_OTP_GQL,
  DEFAULT_PROFILE_PICS_GQL,
  EMAIL_REGISTERATION,
  EMAIL_OTP_VERIFY,
  EMAIL_LOGIN,
} from '../../query/user';
import { apolloClient } from '../../../services/apolloClient';
import { toastAction } from '../../toastAction';

export const userOtpVerifyAction = (value, cb) => {
  const mutation = VERIFY_OTP_GQL;
  return dispatch => {
    dispatch(reduxAction(USER_OTP_VERIFICATION_PENDING, true));

    apolloClient
      .mutate({ mutation, variables: { input: value } })
      .then(({ data }) => {
        const { verifyOtp: res } = data;
        if (!res) return;
        dispatch(reduxAction(USER_INFO, res));
        dispatch(reduxAction(USER_OTP_VERIFICATION_PENDING, false));
        localStorage.setItem('jwtToken', res.token);

        if (res && res._id) {
          dispatch(reduxAction(USER_REGISTER_STATUS, true));

          if (cb) {
            cb();
          } else {
            dispatch(reduxAction(USER_REGISTER_STATUS, false));
          }
        }
        toastAction.success('Verified');
      })
      .catch(err => {
        dispatch(reduxAction(USER_OTP_VERIFICATION_PENDING, false));
        toastAction.error(err);
      });
  };
};

export const userGetAction = () => {
  const query = GET_USER_GQL;
  return dispatch => {
    dispatch(reduxAction(USER_INFO_GET_PENDING, true));
    apolloClient
      .query({ query })
      .then(({ data }) => {
        const { getUser: res } = data;
        dispatch(reduxAction(USER_INFO, res));
        if (res === null) {
          dispatch(reduxAction(USER_LOGOUT));
        } else {
          if (res.username) {
            dispatch(reduxAction(USER_REGISTER_STATUS, true));
          } else {
            dispatch(reduxAction(USER_REGISTER_STATUS, false));
          }
        }
        dispatch(reduxAction(USER_INFO_GET_PENDING, false));
      })
      .catch(err => {
        if (err.response && err.response.statusText === 'Unauthorized') {
          dispatch(reduxAction(USER_LOGOUT));
        }
        dispatch(reduxAction(USER_INFO_GET_PENDING, false));
      });
  };
};

export const userUpdateAction = (value, cb) => {
  const mutation = UPDATE_USER_GQL;
  return dispatch => {
    dispatch(reduxAction(USER_REGISTER_PENDING, true));
    apolloClient
      .mutate({ mutation, variables: { input: value } })
      .then(({ data }) => {
        const { updateUser: res } = data;
        if (!res) return;
        dispatch(reduxAction(USER_INFO, res));
        dispatch(reduxAction(USER_REGISTER_PENDING, false));

        if (cb) {
          cb();
        }
        toastAction.success('Information Updated');
      })
      .catch(err => {
        if (err.response && err.response.statusText === 'Unauthorized') {
          dispatch(reduxAction(USER_LOGOUT));
        }
        dispatch(reduxAction(USER_REGISTER_PENDING, false));
        toastAction.error('Server error');
      });
  };
};

export const userEmailLoginAction = (data, callback) => {
  const mutation = EMAIL_LOGIN;
  return dispatch => {
    dispatch(reduxAction(USER_OTP_PENDING, true));
    apolloClient
      .mutate({ mutation, variables: { input: data } })
      .then(({ data }) => {
        dispatch(reduxAction(USER_OTP_PENDING, false));

        const { emailLogin: res } = data;

        if (!res) return;

        dispatch(reduxAction(USER_INFO, res));
        dispatch(reduxAction(USER_OTP_VERIFICATION_PENDING, false));
        localStorage.setItem('jwtToken', res.token);

        if (res && res._id) {
          dispatch(reduxAction(USER_REGISTER_STATUS, true));

          if (callback) {
            callback();
          } else {
            dispatch(reduxAction(USER_REGISTER_STATUS, false));
          }
        }

        toastAction.success('Verified');
      })
      .catch(err => {
        if (err.message === 'Invalid Password') {
          toastAction.error(err.message);
          dispatch(reduxAction(USER_OTP_PENDING, false));
          return;
        }
        toastAction.error(err);
        dispatch(reduxAction(USER_OTP_PENDING, false));
      });
  };
};

export const userEmailSendOtpAction = (data, callback) => {
  const mutation = EMAIL_REGISTERATION;
  return dispatch => {
    dispatch(reduxAction(USER_OTP_PENDING, true));
    apolloClient
      .mutate({ mutation, variables: { input: data } })
      .then(({ data }) => {
        dispatch(reduxAction(USER_OTP_PENDING, false));
        const { verifyEmailLogin: res } = data;

        if (!res.is_verified_email) {
          toastAction.success('Otp has been send');
          if (callback) {
            callback(res, 1);
          }
        } else {
          if (res.password === null || res.password === undefined) {
            toastAction.success('Generate your password');
            if (callback) {
              callback(res, 2);
            }
          } else {
            toastAction.success('Enter your password');
            if (callback) {
              callback(res, 3);
            }
          }
        }
      })
      .catch(err => {
        toastAction.error(err);
        dispatch(reduxAction(USER_OTP_PENDING, false));
      });
  };
};

export const userEmailOtpVerifyAction = (data, callback) => {
  const mutation = EMAIL_OTP_VERIFY;
  return dispatch => {
    dispatch(reduxAction(USER_OTP_PENDING, true));
    apolloClient
      .mutate({ mutation, variables: { input: data } })
      .then(({ data }) => {
        const { verifyEmailOtp: res } = data;
        if (!res) return;
        if (res && res._id) {
          dispatch(reduxAction(USER_REGISTER_STATUS, true));

          if (callback) {
            callback();
          } else {
            dispatch(reduxAction(USER_REGISTER_STATUS, false));
          }
        }

        toastAction.success('Verified');
      })
      .catch(err => {
        dispatch(reduxAction(USER_OTP_VERIFICATION_PENDING, false));
        toastAction.error(err);
      });
  };
};

export const userSendOtpAction = (data, callback) => {
  const mutation = LOGIN_GQL;
  return dispatch => {
    dispatch(reduxAction(USER_OTP_PENDING, true));
    apolloClient
      .mutate({ mutation, variables: { input: data } })
      .then(() => {
        dispatch(reduxAction(USER_OTP_PENDING, false));
        toastAction.success('Otp has been sent');
        if (callback) {
          callback(data);
        }
      })
      .catch(err => {
        toastAction.error(err);

        dispatch(reduxAction(USER_OTP_PENDING, false));
      });
  };
};

export const defaultProfilePicsGetAction = () => {
  const query = DEFAULT_PROFILE_PICS_GQL;
  return dispatch => {
    apolloClient
      .query({ query })
      .then(({ data }) => {
        const { getDefaultProfilePics: res } = data;
        dispatch(reduxAction(DEFAULT_PROFILE_PICS, res));
      })
      .catch(() => {});
  };
};

export const userLoginModalOpenAction = value => {
  return dispatch => {
    dispatch(reduxAction(USER_LOGIN_MODAL, value));
  };
};

export const userLogout = callback => {
  return dispatch => {
    localStorage.clear();

    dispatch(reduxAction(USER_LOGOUT));
    if (callback) {
      callback();
    }
  };
};
