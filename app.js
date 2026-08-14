require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/route");
const connectDb = require("./db/connect");
const notFound = require("./middleware/not-found")
const handleErrorMiddle = require("./middleware/error-handle")

// middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/tasks", router);
app.use(notFound)
app.use(handleErrorMiddle);

const port = process.env.PORT || 3000
async function start() {
  try {
    await connectDb(process.env.connectionString);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}....`);
    });
  } catch (err) {
    console.log("Something went wrong \n");
    console.log("The error is : ", err);
  }
}

start();
