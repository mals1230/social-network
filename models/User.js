const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //   * Must match a valid email address
            match: [/.+@.+\..+/, "Must match an email address!"]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
              },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Friend',
              },
        ],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

// virtual retrieves the length of the user's `friends` array field on query.
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;








