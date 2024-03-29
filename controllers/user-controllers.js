
const { User } = require('../models');

const userController = {
    // get all users
    getAllUser(req, res) {
      User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get one user by id
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        .then(dbUserData => {
          // If no user is found, send 404
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
    
    // createUser
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    // update User by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No User found with this id!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    // delete User
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No User found with this id!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // create friend
    postFriend({params, body}, res) {
        console.log(params)
        User.findOneAndUpdate(
            {_id: params.userId},
            {$addToSet: {friends: params.friendId}},
            {new: true}
        ).then(dbData => {
            console.log(dbData)
            res.json(dbData)
        })
      },

      removeFriend({ params }, res) {
        console.log(params);
            User.findOneAndUpdate(
              { _id: params.userId },
              { $pull: { friends: params.friendId
              } },
              { new: true }
            )
          .then(userData => {
            if (!userData) {
              res.status(404).json({ message: 'No reaction found with this id!' });
              return;
            }
            res.json(userData);
          })
          .catch(err => res.json(err));
      }
  };

  

module.exports = userController;