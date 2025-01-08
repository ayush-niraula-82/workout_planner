const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("WORKOUT_PLANNER", workoutSchema);
