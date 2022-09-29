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

export const GET_POST_GQL = gql`
  query GetAllPost {
    getAllPost {
      _id
      context
      user_id
      verification {
        verifier_id
      }
    }
  }
`;
