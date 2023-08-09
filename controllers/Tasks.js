const Tasks = require("../models/Tasks");

const getAllTasks = async (req, res) => {
  try {
    const task = await Tasks.find({});

    if (task.length === 0) {
      return res.status(404).json({ message: `No Tasks At the Moment` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const singleTask = await Tasks.findById({ _id: taskID });

    if (!singleTask) {
      return res.status(404).json({ message: `No Task with ID ${taskID}` });
    }

    res.status(200).json({ singleTask });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = (req, res) => {
  res.send("Task has been updated");
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
