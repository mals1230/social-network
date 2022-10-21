// **Thought**:

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (dateCreated) => formatDate(dateCreated)
        },
        username: {
            type: String,
            required: true,
        }
        reactions: {
            type: String,
        }
    }
)


// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`
