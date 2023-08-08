// mongodb+srv://admin:<password>@express.njrdgzg.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");
// const connectionString =
// //   "mongodb+srv://admin:Adedeji79@express.njrdgzg.mongodb.net/Task-Manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
