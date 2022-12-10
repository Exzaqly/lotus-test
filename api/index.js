require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

const { Auction } = require("./models");

const app = express();

app.use(express.json());

app.get("/api/auctions/:id", async (req, res) => {
  const { id } = req.params;
  const auction = await Auction.findById(id);
  return res.status(200).json(auction);
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(4000, () => console.log("Server started on port 4000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

module.exports = app
