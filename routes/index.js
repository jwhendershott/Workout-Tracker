const express = require('express');
const router = express.Router();
const workoutsRoutes = require('./workouts');

router.use('/workouts', workoutsRoutes);

module.exports = router;