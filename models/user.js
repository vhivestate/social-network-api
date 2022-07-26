const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: [true, "Username already taken"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "Email already being used"],
        },
        thoughts: [
                {
                    ref: 'Thoughts'
               }
        ],
        friends: [
            {
                ref: 'Thoughts'
            }
        ],
        toJson: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

  // create the user model using the UserSchema
const User = model("User", UserSchema);

module.exports = User;


thoughts
//[] of _id val referencing thought model
friends
//[] of _id val referencing thought model


//Schema Settings

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

