const db = require('../config/connection');
const { User, Answers } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Answers.deleteMany({});
  await User.create(userSeeds);

  const firstUser = await User.findOne({ username: "jared" })
  await Answers.create({
    user: firstUser._id,
    q1: "blue",
    q2: "orange",
    q3: "ben"
  })

  console.log('all done!');
  process.exit(0);
});
