require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

require("./bot/bot");

const PORT = 3000;
const MONGO_URI = "mongodb://127.0.0.1:27017/tg-bot";

async function dev() {
  try {
    mongoose
      .connect(MONGO_URI)
      .then(() => console.log("Connected to Database"))
      .catch((error) => console.log(error));

    app.listen(PORT, () => {
      console.log("Server has been started");
    });
  } catch (error) {
    console.log(error);
  }
}

dev();
