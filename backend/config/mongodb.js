const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/knowledge_stats", {
    useNewUrlParser: true
  })
  .catch(e => {
    const msg = "Error: Could not connect to mongodb database!";
    console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m");
  });
