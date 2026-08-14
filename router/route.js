const {
  showTasks,
  insertTasks,
  getOneTask,
  updateTask,
  deleteTask,
} = require("../logic/methodswritten");

const express = require("express");
const router = express.Router();

router.route("/").get(showTasks).post(insertTasks);
router.route("/:id").get(getOneTask).patch(updateTask).delete(deleteTask);

module.exports = router;
