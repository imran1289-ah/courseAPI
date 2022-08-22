const express = require("express");
const router = express.Router();
const Model = require("../models/model");

//Post Method
router.post("/post", async (req, res) => {
  const course = new Model({
    course_name: req.body.course_name,
    course_department: req.body.course_department,
    course_credits: req.body.course_credits,
  });

  try {
    const courseToSave = course.save();
    res.status(200).json(courseToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const course = await Model.find();
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const course = await Model.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCourse = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedCourse, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Model.findByIdAndDelete(id);
    res.send("Course Deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
