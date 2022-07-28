const router = require('express').Router();
const {
    addThought,
    removeThought,
    // updateThought,
    // addReply,
    // removeReply
  } = require('../../controllers/thought-controller');

// /api/Thoughts/<pizzaId>
router
.route('/')
.post(addThought);

// /api/Thoughts/<pizzaId>/<ThoughtId>
router
  .route('/:thoughtId')
//   .put(updateThought)
  .delete(removeThought);

//   router.route('/:userId/:thoughtId/:replyId').delete(removeReply);

module.exports = router;