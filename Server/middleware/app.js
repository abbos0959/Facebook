const express = require("express");
const DB = require("../database/db");
DB();
const colors = require("colors");
const UserRouter = require("../router/userRouter");
const app = express();
app.use(express.json());

app.use("/api/v1", UserRouter);
module.exports = app;
