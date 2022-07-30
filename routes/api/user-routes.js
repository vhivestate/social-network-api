const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    postFriend,
    removeFriend
  } = require('../../controllers/user-controllers');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Friends /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(postFriend)
    .delete(removeFriend)

module.exports = router;



