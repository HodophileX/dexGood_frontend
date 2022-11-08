import { gql } from '@apollo/client';

export const CREATE_POST_GQL = gql`
  mutation CreatePost($input: PostInputQuery) {
    createPost(input: $input) {
      _id
      context
      user_id
      thumbnail
      verification {
        verifier_email
        verification_status
      }
      type
    }
  }
`;

export const GET_POST_GQL = gql`
  query GetAllPost {
    getAllPost {
      _id
      context
      user_id
      thumbnail
      verification {
        verifier_email
        verification_status
      }
      type
    }
  }
`;
