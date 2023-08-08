const mongoose = require("mongoose");
// mongoose.Schema;

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  description: String,
  prority: Array,
});
