const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction
    // updateThought,
    // addReply,
    // removeReply
  } = require('../../controllers/thought-controller');

// /api/Thoughts/<pizzaId>
router
.route('/')
.post(addThought);

router
.route('/:thoughtId/reaction')
.post(addReaction);

// /api/Thoughts/<pizzaId>/<ThoughtId>
router
  .route('/:thoughtId/user/:id')
//   .put(updateThought)
  .delete(removeThought);

//   router.route('/:userId/:thoughtId/:replyId').delete(removeReply);

module.exports = router;