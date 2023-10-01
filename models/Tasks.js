const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of Task must be provided"],
      time: true,
      maxLength: [50, "Task Name cannot exceed 50 chars"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: {
        values: ["Personal", "Work", "Lifestyle", "No-List"],
        message: "{VALUE} is not defined",
      },
      default: "Personal",
    },
    description: String,
    priority: {
      type: String,
      default: "Medium",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tasks", TaskSchema);
