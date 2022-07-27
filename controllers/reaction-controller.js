const { User, Reaction } = require('../models');

const reactionController = { 
    createReaction({ body }, res) {
        Reaction.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
      }
    // remove reply
// removeReaction({ params }, res) {
//     Reaction.findOneAndUpdate(
//       { _id: params.reactionId },
//       { $pull: { reactions: { reactionId: params.reactionId } } },
//       { new: true }
//     )
//       .then(dbUserData => res.json(dbUserData))
//       .catch(err => res.json(err));
//   }
};

module.exports = reactionController;
