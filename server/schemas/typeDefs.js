const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Answers {
    user:  ID,
    q1: String,
    q2: String,
    q3: String
  }

  type Query {
    getUserById(_id: ID!): User
    getUserByName(username: String!): User
    getUsers: [User]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    saveSurvey(user: ID!, q1: String!, q2: String!, q3: String!): Answers
  }
`;

module.exports = typeDefs;
