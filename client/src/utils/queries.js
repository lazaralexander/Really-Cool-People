import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      password
    }
  }
`;

export const GET_USER_MATCHES = gql`
  query getUserMatches($user: ID!) {
    getUserMatches(user: $user) {
      name
      score
    }
  }
`;
