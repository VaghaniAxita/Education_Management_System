const express = require('express');
const { registerUser, loginUser, getAllUsers } = require('../controllers/authController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', verifyToken, isAdmin, getAllUsers);

module.exports = router;
