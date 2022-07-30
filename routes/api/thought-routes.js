const router = require('express').Router();
const {
    getAllThoughts, 
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
    // updateThought,
    // addReply,
    // removeReply
  } = require('../../controllers/thought-controller');

// /api/Thoughts/<pizzaId>
router
.route('/')
.post(addThought)
.delete(removeThought)
.get(getAllThoughts);

router
.route('/:thoughtId')
.get(getThoughtById);

router
.route('/:thoughtId/reaction')
.post(addReaction);

router 
.route('/:thoughtId/reaction/:reactionId')
.delete(removeReaction);

// /api/Thoughts/<pizzaId>/<ThoughtId>
router
  .route('/:thoughtId/user/:id')
//   .put(updateThought)
  .delete(removeThought);

//   router.route('/:userId/:thoughtId/:replyId').delete(removeReply);

module.exports = router;