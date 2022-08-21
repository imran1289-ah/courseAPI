const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/courseAPI", {
  useNewUrlParser: true,
});

const courseSchema = {
  course_name: String,
  course_department: String,
  course_credits: Number,
};

const CourseData = mongoose.model("CourseData", courseSchema);

app.listen(3000, function () {
  console.log("Server running on port 3000");
});

app.get("/course", (req, res) => {
  CourseData.find((err, courses) => {
    if (!err) {
      res.send(courses);
    } else {
      res.send(err);
    }
  });
});
