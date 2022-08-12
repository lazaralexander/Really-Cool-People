const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Answers } = require('../models');
const { signToken } = require('../utils/auth');
const { getMatchPercentage } = require('../utils/matchup')

const resolvers = {
  Query: {
    getUserById: (parent, args) => User.findById(args._id),
    getUserByName: (parent, args) => User.findOne({ username: args.username }),
    getUsers: () => User.find(),
    getUserMatches: async (parent, { user }) => {
      // 1. Find the current user's survey answers
      const userAnswers = await Answers.findOne({ user })

      // 2. If the user hasn't answered the survey, return an error
      if (!userAnswers) {
        throw new UserInputError('User has not answered survey')
      }

      // 3. Otherwise find all other completed surveys
      const allOtherAnswers = await Answers.find({ user: { "$ne": user }})

      // allOtherAnswers - array of survey answers
      // we can map them and for each one, return an asynchronous function where
      // we find the rest of the user's information (to get their username)
      // and process their match score with the current user

      // because we're mapping and using an asynchronous function, what we actually
      // end up with is an array of asynchronous functions
      // [async func () => {}, async function () => {}] .. etc

      // Promise.all accepts one argument, which is an array of asynchronous functions
      // since we have an array of promises because of the map function,
      // we can wait for all of them to finish before proceeding by using Promise.all

      // When Promise.all is finished, it also returns an array with the return values
      // of each promise that finished

      // ex: promiseArray = [PromiseA, PromiseB, PromiseC, PromiseD]
      //     results = await Promise.all[promiseArray]
      //     results looks like:
      //     [ResultA, ResultB, ResultC, ResultD]

      const matches = await Promise.all(allOtherAnswers.map(async (otherAnswers) => {
        try {
          const user = await User.findById(otherAnswers.user);
          const score = getMatchPercentage(userAnswers, otherAnswers);
          
          return {
            name: user.username,
            score: score
          }
        } catch (e) {
          console.error(e)
        }
      }))

      return matches;
    }
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

      console.log("user logged in", user);

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