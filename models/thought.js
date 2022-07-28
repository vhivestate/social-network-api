const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String
      },
      username: {
        type: String,
        // required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
    }
    // {
    //   toJSON: {
    //     virtuals: true,
    //     getters: true
    //   },
    // }
  );

const ThoughtSchema = new Schema(
    {   
        // set custom id to avoid confusion with parent comment _id
        // thoughtId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId()
        // },
        username: {
            type: String,
            // required: true
        },
        thoughtText: {
            type: String,
            // required: true,
            // max: 280,
            // min: 1
        },

        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        //     // get: createdAtVal => dateFormat(createdAtVal)
        // },
        reactions: [ReactionSchema],

        // toJson: {
        //     virtuals: true,
        //     getters: true
        // }
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

