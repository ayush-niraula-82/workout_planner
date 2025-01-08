const WORKOUT_PLANNER = require("../models/workoutSchema");

const getWorkoutList = async (req, res, err) => {
  try {
    const workoutList = await WORKOUT_PLANNER.find();
    res.json({
      message: "Sucessfully Fetched Workout Lists",
      data: workoutList,
    });
  } catch (error) {
    res.status(400).json({ error: "Error In Fetching Workout Lists" });
  }
};

const addWorkout = async (req, res, err) => {
  try {
    const newWorkout = await WORKOUT_PLANNER.create(req.body);
    res.status(200).json({
      message: "Sucessfully Added a new workout",
      data: newWorkout,
    });
  } catch (error) {
    res.status(400).json({ error: "Error In Adding New Workout" });
  }
};

module.exports = { getWorkoutList, addWorkout };
