import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_SURVEY = gql `
  mutation saveSurvey(
    $user: ID!
    $q1: String!
    $q2: String!
    $q3: String!
    ) {
      saveSurvey(
        user: $user
        q1: $q1
        q2: $q2
        q3: $q3
      ) {
        user,
        q1,
        q2,
        q3
      }
    }
`