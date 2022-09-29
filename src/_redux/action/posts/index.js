import { reduxAction } from '../base';
import { GET_POST_PENDING, POST_CREATE_PENDING, POST_INFO } from './type';

import { CREATE_POST_GQL, GET_POST_GQL } from '../../query/post';
import { apolloClient } from '../../../services/apolloClient';
import { toastAction } from '../../toastAction';

export const createPostAction = (value, cb) => {
  const mutation = CREATE_POST_GQL;
  return dispatch => {
    dispatch(reduxAction(POST_CREATE_PENDING, true));
    apolloClient
      .mutate({ mutation, variables: { input: value } })
      .then(({ data }) => {
        if (data) {
          if (cb) {
            cb();
          }
        }
        toastAction.success('Post created');
      })
      .catch(err => {
        dispatch(reduxAction(POST_CREATE_PENDING, false));
        toastAction.error('Post created error');
      });
  };
};

export const getPostAction = () => {
  const query = GET_POST_GQL;
  return dispatch => {
    dispatch(reduxAction(GET_POST_PENDING, true));
    apolloClient
      .query({ query })
      .then(({ data }) => {
        const { getAllPost: res } = data;
        dispatch(reduxAction(POST_INFO, res));
        dispatch(reduxAction(GET_POST_PENDING, false));
      })
      .catch(err => {
        toastAction.error(err);
        dispatch(reduxAction(GET_POST_PENDING, false));
      });
  };
};
