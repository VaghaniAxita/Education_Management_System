const express = require('express');
const { createCourse, updateCourse, deleteCourse, getAllCourses } = require('../controllers/courseController');
const { verifyToken, isAdmin, isTeacher } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, isAdmin, createCourse);
router.put('/:id', verifyToken, isTeacher, updateCourse);
router.delete('/:id', verifyToken, isAdmin, deleteCourse);
router.get('/', verifyToken, getAllCourses);

module.exports = router;
