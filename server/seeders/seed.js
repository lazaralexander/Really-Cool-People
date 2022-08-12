const db = require('../config/connection');
const { User, Answers } = require('../models');
const userSeeds = require('./userSeeds.json');
const { COLORS, FRUITS, FTA } = require("../../client/src/utils/surveyChoices")

const generateRandomAnswers = async (user) => {
  const userDocument = await User.findOne({ username: user.username })

  await Answers.create({
    user: userDocument._id,
    q1: COLORS[Math.floor(Math.random() * COLORS.length)],
    q2: FRUITS[Math.floor(Math.random() * FRUITS.length)],
    q3: FTA[Math.floor(Math.random() * FTA.length)]
  })
}

db.once('open', async () => {
  await User.deleteMany({});
  await Answers.deleteMany({});
  await User.create(userSeeds);

  await Promise.all(userSeeds.map(user => generateRandomAnswers(user)))

  console.log('all done!');
  process.exit(0);
});
