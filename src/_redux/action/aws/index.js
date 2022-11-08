import axios from 'axios';
import { apolloClient } from '../../../services/apolloClient';

import { GET_SIGNED_URL_GQL } from '../../query/aws';
export const awsSignedUrlGetAction = (prefixFileName, fileName) => {
  const newFileName = fileName;
  const key = `${prefixFileName}/${newFileName}`;
  return apolloClient.query({
    query: GET_SIGNED_URL_GQL,
    variables: { key },
  });
};

export const uploadFileS3bucketAction = async (file, prefixFileName) => {
  const { name } = file;
  const { data } = await awsSignedUrlGetAction(prefixFileName, name);
  const { getSignedUrl: res } = data;
  await axios({ method: 'PUT', url: res.url, data: file });
  return res.url.split('?')[0];
};
