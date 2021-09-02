const mongoose = require("mongoose");

const mySch = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  course: {
    type: String,
  },
});

module.exports = mongoose.model("modelSch", mySch);
