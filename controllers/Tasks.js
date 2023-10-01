const { StatusCodes } = require("http-status-codes");

const Tasks = require("../models/Tasks");
const { BadRequest } = require("../errors");

const getAllTasks = async (req, res) => {
  const tasks = await Tasks.find({});
  if (tasks.length === 0) {
    return res.status(404).json({ message: `No Tasks At the Moment` });
  }
  res.status(200).json({ tasks });
};

const getTask = async (req, res) => {
  const { id: taskID } = req.params;
  const singleTask = await Tasks.findById({ _id: taskID });

  if (!singleTask) {
    throw new BadRequest(`No Task with ID ${taskID}`);
  }
  res.status(200).json({ singleTask });
};

const createTask = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    throw new BadRequest("Name of task is required");
  }
  const task = await Tasks.create(req.body);
  res.status(StatusCodes.OK).json({ status: "success", task });
};

const updateTask = async (req, res) => {
  const {
    params: { id: taskId },
    ...body
  } = req;

  if (!body) {
    throw new BadRequest("Body has to be present");
  }

  if (!taskId) {
    throw new BadRequest("ID is empty");
  }
  const task = await Tasks.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ message: `No Task with ID ${taskID}` });
  }

  res.status(200).json({ task });
};

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;

  if (!taskID) {
    throw new BadRequest("ID is empty");
  }
  const task = await Tasks.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res.status(404).json({ message: "Task DOesnt exist" });
  }
  res.status(200).json({ message: "Sucessfully Deleted " });
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
