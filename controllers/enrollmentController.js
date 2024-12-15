const Course = require("../models/Course");

const enrollStudent = async (req, res) => {
  const { studentId, courseId } = req.body;
  try {
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    if (course.enrolledStudents.includes(studentId))
      return res.status(400).json({ error: "Student is already enrolled" });

    course.enrolledStudents.push(studentId);
    await course.save();
    res.status(200).json({ message: "Student enrolled successfully", course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeStudent = async (req, res) => {
  const { studentId, courseId } = req.body;
  try {
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    course.enrolledStudents = course.enrolledStudents.filter(
      (id) => id.toString() !== studentId
    );
    await course.save();
    res.status(200).json({ message: "Student removed from course", course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMyCourses = async (req, res) => {
  try {
    const courses = await Course.find({ enrolledStudents: req.user.id });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { enrollStudent, removeStudent, getMyCourses };
