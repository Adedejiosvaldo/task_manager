require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const express = require("express");
const tasks = require("./routes/Tasks");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);

app.use(errorHandler);
app.use(notFound);
const start = async () => {
  try {
    await connectDB(process.env.MANGO_URI);
    app.listen(PORT, console.log(`Server is listening ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
