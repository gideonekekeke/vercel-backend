const express = require("express");
const router = express.Router();
const modelSch = require("./ModelSchema");

router.get("/user", async (req, res) => {
  const AllData = await modelSch.find();
  res.status(200).json(AllData);
});

router.post("/users", async (req, res) => {
  const SendingData = await modelSch.create({
    name: req.body.userName,
    email: req.body.email,
    course: req.body.course,
  });

  try {
    res.status(201).json({
      message: "Succefull 💻",
      data: SendingData,
    });
  } catch (error) {
    res.status(404).json({
      message: "getting all data failed 😣",
      data: SendingData,
    });
  }
});

module.exports = router;
