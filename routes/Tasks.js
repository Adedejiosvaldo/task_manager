const express = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/Tasks");
const router = express.Router();

// router.get('')
router.route("/").get(getAllTasks).post(createTask);
// router.get('')

// router.route("/").get(getAllTasks);
// // router.post();
// router.route("/").post(createTask);

// router.patch ();
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// router.delete();
// router.route("/:id").delete(deleteTask);
module.exports = router;
