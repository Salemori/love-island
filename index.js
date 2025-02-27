const express = require("express");
const connectDB = require("./src/config/db");
const userRouter = require("./src/routers/userRouter");

require("dotenv").config();

const app = express();
connectDB();

// const env = dotenv.config().parsed;

app.use(express.json());
app.use("/api/v1/user", userRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});