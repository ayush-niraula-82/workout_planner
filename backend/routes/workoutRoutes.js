const express = require("express");
const router = express.Router();
const {
  getWorkoutList,
  addWorkout,
} = require("../controller/workoutController");

// routes
router.get("/get-workout-list", getWorkoutList);
router.post("/add-workout", addWorkout);

module.exports = router;
