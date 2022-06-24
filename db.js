const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// connect mongodb atlas
const db = process.env.REMOTE_DB;
// connect local db
// const db = process.env.LOCAL_DB;

const connectDb = async () => {
  try {
    await mongoose.connect(db);
    console.log("mongodb connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDb;
