const { Router } = require("express");
const {
  getTasks,
  saveTask,
  deleteTask,
  updateTask,
} = require("../controllers/TaskControllers");
const router = Router();

router.get("/get", getTasks); //  it associates the /get route with the getTasks function,
router.post("/save", saveTask);
router.put("/update/:id", updateTask); //In the context of a RESTful API, the HTTP PUT method is used to update or replace an existing resource or resource representation on the server.
router.delete("/delete/:id", deleteTask);

module.exports = router;
