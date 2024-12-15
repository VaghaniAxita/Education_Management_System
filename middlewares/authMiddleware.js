const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'Admin') return res.status(403).json({ error: 'Forbidden' });
    next();
};

const isTeacher = (req, res, next) => {
    if (req.user.role !== 'Teacher' && req.user.role !== 'Admin') return res.status(403).json({ error: 'Forbidden' });
    next();
};

const isStudent = (req, res, next) => {
    if (req.user.role !== 'Student') return res.status(403).json({ error: 'Forbidden' });
    next();
};

module.exports = { verifyToken, isAdmin, isTeacher, isStudent };
