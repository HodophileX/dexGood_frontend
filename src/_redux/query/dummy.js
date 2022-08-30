const { gql } = require('@apollo/client');

export const DUMMY_GQL = gql`
  query Dummy {
    dummy {
      message
    }
  }
`;
