const router = require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require('../../controllers/pizza-controller');

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

module.exports = router;





/api/users
// GET all users

  
// GET a single user by its _id and populated thought and friend data

// POST a new user

// PUT to update a user by its _id

// DELETE to remove user by its _id

/api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list

/api/thoughts

// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id

/api/thoughts/:thoughtId/reactions

POST 
// to create a reaction stored in a single thought's reactions array field

DELETE 
// to pull and remove a reaction by the reaction's reactionId value