const Tasks = require("../models/Tasks");

const getAllTasks = async (req, res) => {
  try {
    const task = await Tasks.find({});
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

const deleteTask = (req, res) => {
  res.send("Successfully Deleted");
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
