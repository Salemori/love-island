const express = require("express");
const connectDB = require("./src/config/db")

require("dotenv").config();

const app = express();
connectDB();

// const env = dotenv.config().parsed;

app.use(express.json());


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});