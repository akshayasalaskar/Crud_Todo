const TaskModel = require("../models/TaskModel");

// Defining an Express Route Handler:
module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
  console.log("GET API Called")
};

module.exports.saveTask = async (req, res) => {
  // Extracting Task Data:
  // const { task } = req.body;: This line extracts the task property from the request's body. It assumes that the incoming HTTP request contains a JSON object with a task property, which represents the task description.
  const { task } = req.body;

  TaskModel.create({ task }) //This line uses the TaskModel, which is a Mongoose model representing the schema for tasks, to create a new task document in the MongoDB database.
    .then((data) => {
      console.log("Saved Successfully");
      res.status(201).json(data);
    })
    .catch((err) => {
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  TaskModel.findByIdAndUpdate(id, { task })
    .then(() => {
      res.send("Updated successfully"); // Moved .then() and removed the .catch() inside it
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err, msg: "Something went wrong" }); // Changed res.send to res.status(500).json
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully"); // Moved .then() and removed the .catch() inside it
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err, msg: "Something went wrong" }); // Changed res.send to res.status(500).json
    });
};