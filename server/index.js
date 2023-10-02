require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')

const playlist = require('./router/playlist')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/songs',playlist)

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.error("mongodb is not connected"));


const port = process.env.Port || 3000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
