// const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const ReactionSchema = new Schema(
//     {
//       reactionId: {
//         type: Schema.Types.ObjectId,
//         default: () => new Types.ObjectId()
//       },
//       reactionBody: {
//         type: String
//       },
//       username: {
//         type: String,
//         required: true
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//         get: createdAtVal => dateFormat(createdAtVal)
//       },
//       // use ReplySchema to validate data for a reply
//       replies: [ReplySchema]
//     },
//     {
//       toJSON: {
//         virtuals: true,
//         getters: true
//       },
//     }
//   );

// const ThoughtSchema = new Schema(
//     {
//         thoughtText: {
//             type: String,
//             required: true,
//             max: 280,
//             min: 1
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             get: createdAtVal => dateFormat(createdAtVal)
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         reactions: [ReactionSchema],

//         toJson: {
//             virtuals: true,
//             getters: true
//         }
//     }
// );

// const Thought = model('Thought', ThoughtSchema);

// module.exports = Thought;

