const { Schema, model, Types } = require('mongoose');
const reactionSchema=require('/.Reaction')

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
        // * `reactions` (These are like replies) - Array of nested documents created with the `reactionSchema`
        reactions: [
            reactionSchema
        ]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought;