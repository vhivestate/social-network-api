const router = require('express').Router();

const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes')
const reactionRoutes = require('./reaction-routes')
// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('./', reactionRoutes)

module.exports = router;