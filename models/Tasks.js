const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of Task must be provided"],
    trom: true,
    maxLength: [50, "Task Name cannot exceed 50 chars"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  description: String,
  priority: {
    type: String,
    default: "Medium",
  },
});

module.exports = mongoose.model("T asks", TaskSchema);
