// Copying from readme for now 

const UserSchema = new Schema (
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

        },
        thoughts: [],
        friends: [],
    }
    {
        toJSON: {
            getters: true,
        },
    }
    
)

// * `email`
//   * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)
