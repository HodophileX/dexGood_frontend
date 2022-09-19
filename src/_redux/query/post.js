import { gql } from '@apollo/client';

export const CREATE_POST_GQL = gql`
  mutation CreatePost($input: PostInputQuery) {
    createPost(input: $input) {
      _id
      context
      user_id
      verification {
        verifier_id
      }
    }
  }
`;
