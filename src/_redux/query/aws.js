import { gql } from '@apollo/client';

export const GET_SIGNED_URL_GQL = gql`
  query getSignedUrl($key: String!) {
    getSignedUrl(key: $key) {
      url
    }
  }
`;
