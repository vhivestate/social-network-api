const { Thought, User } = require('../models');

const thoughtController = {
  // add thought to user
  addThought({ body}, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // remove thought
  removeThought({ params }, res) {
    console.log(params);
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then(deletedThought => {
        if (!deletedThought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        console.log(deletedThought)
        return User.findOneAndUpdate(
          { _id: params.id },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  addReaction({params, body}, res) {
    console.log(body)
    Thought.findOneAndUpdate(
        {_id: params.thoughtId},
        {$addToSet: {reactions: body}},
        {new: true}
    ).then(dbData => {
        console.log(dbData)
        res.json(dbData)
    })
  }

  removeReaction({params}, res) {
    console.log(params);
    Thought.findOneAndUpdate(
        {_id: params.reactionId}
    )
  }
//   removeReaction({ params }, res) {
//     Reaction.findOneAndUpdate(
//       { _id: params.reactionId },
//       { $pull: { reactions: { reactionId: params.reactionId } } },
//       { new: true }
//     )
//       .then(dbUserData => res.json(dbUserData))
//       .catch(err => res.json(err));
//   }

};



module.exports = thoughtController;