const router = require('express').Router();
const {
    createReaction
    // removeReaction,
  } = require('../../controllers/reaction-controller');

// /api/comments/<pizzaId>
router
.route('/users/:id')
.post(createReaction);

// /api/comments/<pizzaId>/<commentId>
// router
//   .route('/:id')
//   .put(addReaction)
//   .delete(removeReaction);

//   router.route('/:id/:reactionId/').delete(removeReaction);

module.exports = router;