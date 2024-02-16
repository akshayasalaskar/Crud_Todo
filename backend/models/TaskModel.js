const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);

// this code sets up a Mongoose schema for a "Task" entity with one field called "task," which represents a task description.
//It also exports a Mongoose model named "Task" based on this schema, allowing you to work with "Task" documents in your MongoDB
//database using the Mongoose API.
