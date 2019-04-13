const mongoose = require("mongoose");
const { dbMongo } = require("../.env");

mongoose
  .connect(dbMongo, {
    useNewUrlParser: true
  })
  .catch(e => {
    const msg = "Error: Could not connect to mongodb database!";
    console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m");
  });
