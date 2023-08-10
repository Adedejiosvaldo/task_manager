const { createCustomError } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/asyncWrapper");
const Tasks = require("../models/Tasks");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Tasks.find({});

  if (tasks.length === 0) {
    return res.status(404).json({ message: `No Tasks At the Moment` });
  }

  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const singleTask = await Tasks.findById({ _id: taskID });

  if (!singleTask) {
    const error = new Error("No Task");
    error.status = 404;
    return next(createCustomError(`No Task with ID ${taskID}`, 404));
    // return res.status(404).json({ msg: "Not Foubnd" });
  }

  res.status(200).json({ singleTask });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(201).json({ task });
});

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const { body } = req.body;

    const task = await Tasks.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ message: `No Task with ID ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Tasks.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: "Task DOesnt exist" });
    }
    res.status(200).json({ message: "Sucessfully Deleted " });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
