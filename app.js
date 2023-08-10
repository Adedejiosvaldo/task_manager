const connectDB = require("./db/connect");
const express = require("express");
const tasks = require("./routes/Tasks");
const app = express();
const PORT = 3000;
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    console.log("object");
    await connectDB(process.env.MANGO_URI);
    app.listen(PORT, console.log(`Server is listening ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
