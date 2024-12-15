const express = require('express');
const { assignGrade, getMyGrades, getCourseGrades } = require('../controllers/gradeController');
const { verifyToken, isTeacher, isStudent } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/assign', verifyToken, isTeacher, assignGrade);
router.get('/my-grades', verifyToken, isStudent, getMyGrades);
router.get('/course/:courseId', verifyToken, isTeacher, getCourseGrades);

module.exports = router;
