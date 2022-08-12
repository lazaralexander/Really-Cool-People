const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Answers } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getUserById: (parent, args) => User.findById(args._id),
    getUserByName: (parent, args) => User.findOne({ username: args.username }),
    getUsers: () => User.find(),
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    saveSurvey: async (parent, {user, q1, q2, q3}) => {
      const existingAnswers = await Answers.findOne({ user })
      console.log("existingAnswers", existingAnswers);
      if (!!existingAnswers) {
        throw new UserInputError('User has already answered survey')
      }

      const survey = await Answers.create({user, q1, q2, q3});

      return survey;
    }
  }
};

module.exports = resolvers;