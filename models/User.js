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
            unique, true,
            // * `email`
            //   * Must match a valid email address (look into Mongoose's matching validation)

        },
        thoughts: [],
        // * `thoughts`
        //   * Array of `_id` values referencing the `Thought` model
        friends: [],
        // * `friends`
        //   * Array of `_id` values referencing the `User` model (self-reference)
    }
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








