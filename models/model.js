const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  course_name: { type: String },
  course_department: { type: String },
  course_credits: { type: Number },
});

module.exports = mongoose.model("Course", courseSchema);
