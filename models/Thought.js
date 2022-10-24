const { Schema, model, Types } = require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (dateCreated) => formatDate(dateCreated)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            type: String,
        ]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    }
)


// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

// * `reactions` (These are like replies)

const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    reactionBody: {
        type: String, 
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
  },
  {
    toJSON: {
      getters: true,
    },
      id: false,
  }
);
    
module.exports = reactionSchema;