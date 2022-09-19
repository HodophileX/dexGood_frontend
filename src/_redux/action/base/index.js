import { apiClient } from '../../../services/apiClient';

export const reduxAction = (type, data) => {
  return {
    type,
    payload: data,
  };
};

export const errorPayload = (type, error) => {
  return {
    type,
    error,
  };
};

export const baseStateAction = (method, url, state, data) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiClient({ method, url, data })
        .then(res => {
          dispatch(reduxAction(state, res.data));

          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};

export const baseDispatchAction = (state, data) => {
  return dispatch => {
    dispatch(reduxAction(state, data));
  };
};

export const removeDataAction = state => {
  return dispatch => {
    dispatch(reduxAction(state, []));
  };
};
