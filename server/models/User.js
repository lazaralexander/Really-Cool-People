const mongoose = require('mongoose');

<<<<<<< HEAD
=======
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

>>>>>>> 7b8f495 (rebase 5)
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
    surveyAnswers: {
      type: String,
      required: false,
    }
=======
  },
  
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
>>>>>>> 7b8f495 (rebase 5)
  }
);

// hash user password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

<<<<<<< HEAD
const User = model('User', userSchema);
=======
const User = mongoose.model('User', userSchema);
>>>>>>> 7b8f495 (rebase 5)

module.exports = User;
