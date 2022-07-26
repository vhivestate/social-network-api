const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controllers');

// Set up GET all and POST at /api/users
router
  .route('/users')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
router
  .route('/users/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

//Friends /api/users/:userId/friends/:friendId
router
    .post(postFriend)
    .delete(deleteFriend)

module.exports = router;



