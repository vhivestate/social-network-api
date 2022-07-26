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
        // thoughts: [
        //         {
        //             type: Schema.Types.ObjectId,
        //             ref: 'Thought'
        //        }
        // ],
        // friends: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'User'
        //     }
        // ],
        // toJson: {
        //     virtuals: true,
        //     getters: true,
        // },
        // id: false,
    }
);

  // create the user model using the UserSchema
const User = model("User", UserSchema);

module.exports = User;


