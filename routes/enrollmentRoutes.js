const express = require('express');
const { enrollStudent, removeStudent, getMyCourses } = require('../controllers/enrollmentController');
const { verifyToken, isAdmin, isStudent } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/enroll', verifyToken, isAdmin, enrollStudent);
router.delete('/remove', verifyToken, isAdmin, removeStudent);
router.get('/my-courses', verifyToken, isStudent, getMyCourses);

module.exports = router;
