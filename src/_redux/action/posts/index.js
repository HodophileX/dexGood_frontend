import { reduxAction } from '../base';
import { POST_CREATE_PENDING } from './type';

import { CREATE_POST_GQL } from '../../query/post';
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
