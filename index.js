const express = require("express");
const connectDB = require("./src/config/db");
const userRouter = require("./src/routers/userRouter");

require("dotenv").config();

const app = express();
connectDB();

// const env = dotenv.config().parsed;

app.use(express.json());
app.use("/api/v1/user", userRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});