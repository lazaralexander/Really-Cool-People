const {Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')

const answersSchema = new Schema (
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        q1: {
            type: String,
            required: false
        },
        q2: {
            type: String,
            required: false
        },
        q3: {
            type: String,
            required: false
        },
    }
);

const Answers = model('Answers', answersSchema);

module.exports = Answers