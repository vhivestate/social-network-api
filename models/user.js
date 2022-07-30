const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        thoughts: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Thought'
               }
        ],
        friends: [ 
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        // toJson: {
        //     // virtuals: true,
        //     // getters: true,
        // },
        // id: false,
    }
);

// get total count of thoughts and reactions on retrieval
// UserSchema.virtual('thoughtCount').get(function() {
//     return this.thoughts.length;
//   });

  // create the user model using the UserSchema
const User = model("User", UserSchema);

module.exports = User;


