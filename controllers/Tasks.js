const getAllTasks = (req, res) => {
  res.json("All Tasks from Controller");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const createTask = (req, res) => {
  res.json(req.body);
};

const updateTask = (req, res) => {
  res.send("Task has been updated");
};

const deleteTask = (req, res) => {
  res.send("Successfully Deleted");
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
