const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const morgan = require("morgan");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      "Query:",
      JSON.stringify(req.query),
      "Status:",
      tokens.status(req, res),
      "R-Time:",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const port = 3000;
const uri = `${process.env.DRIVER}://${process.env.USER}:${process.env.PSW}@${process.env.CLUSTER_NAME}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.APP_NAME}`;

const start = async () => {
  try {
    app.use("/api/v1/tasks", tasks);
    await connectDB(uri);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
