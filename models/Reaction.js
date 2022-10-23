// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {

  },
  {
    toJSON: {
      getters: true,
    },
      id: false,
  }
);
    
module.exports = reactionSchema;