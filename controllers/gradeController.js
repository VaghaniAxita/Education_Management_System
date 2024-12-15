const Grade = require("../models/Grade");

const assignGrade = async (req, res) => {
  const { studentId, courseId, grade } = req.body;
  try {
    const existingGrade = await Grade.findOne({
      course: courseId,
      student: studentId,
    });
    if (existingGrade) {
      existingGrade.grade = grade;
      await existingGrade.save();
      return res
        .status(200)
        .json({ message: "Grade updated", grade: existingGrade });
    }

    const newGrade = new Grade({ course: courseId, student: studentId, grade });
    await newGrade.save();
    res
      .status(201)
      .json({ message: "Grade assigned successfully", grade: newGrade });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMyGrades = async (req, res) => {
  try {
    const grades = await Grade.find({ student: req.user.id }).populate(
      "course",
      "title"
    );
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCourseGrades = async (req, res) => {
  try {
    const grades = await Grade.find({ course: req.params.courseId }).populate(
      "student",
      "name email"
    );
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { assignGrade, getMyGrades, getCourseGrades };
