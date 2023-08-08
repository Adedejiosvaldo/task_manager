const Tasks = require("../models/Tasks");

const getAllTasks = (req, res) => {
  res.json("All Tasks from Controller");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(201).json({ task });
};

const updateTask = (req, res) => {
  res.send("Task has been updated");
};

const deleteTask = (req, res) => {
  res.send("Successfully Deleted");
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
